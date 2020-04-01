import re
import json
from ..consts import STATE, LISTDATA, MAPPING, SOUL, METADATA
from .backend import BackendMixin
from .utils import defaultify
from .resolvers import desolve
from Jumpscale import j
from collections import defaultdict

BCDBMETADATA = "metadata"
SCHEME_UID_PAT = "(?P<schema>.+?)://(?P<id>.+)"


def parse_schema_and_id(s):
    m = re.match(SCHEME_UID_PAT, s)
    if m:
        return m.groupdict()["schema"], int(m.groupdict()["id"])
    return None, None


class BCDB(BackendMixin):
    def __init__(self, name="gundb"):
        self.db = defaultdict(lambda: defaultdict(lambda: defaultdict()))
        self.bcdb = j.data.bcdb.get(name=name)

    def get_schema_by_url(self, url):
        schema = j.data.schema.get_from_url_latest(url=url)
        return schema

    def get_model_by_schema_url(self, schema_url):

        return self.bcdb.model_get(url=schema_url)

    def recover_graph(self):
        root_objs = self.bcdb.get_all()
        graph = {}
        for root_obj in root_objs:
            soul = json.loads(getattr(root_obj, BCDBMETADATA))[SOUL]
            graph[soul] = self.recover_obj(root_obj)
        return desolve(graph)

    def recover_obj(self, root_obj):
        db_form = defaultify(root_obj._ddict)
        return self.convert_to_graph(self.parse_metadata(db_form))

    def parse_metadata(self, obj):
        if not isinstance(obj, dict):
            return obj
        result = obj.copy()
        if BCDBMETADATA in result:
            result[METADATA] = json.loads(result.pop(BCDBMETADATA))
        for k, v in result.items():
            if isinstance(v, list):
                result[k] = list(map(self.parse_metadata, v))
            else:
                result[k] = self.parse_metadata(v)
        return result

    def stringify_metadata(self, obj):
        if not isinstance(obj, dict):
            return obj
        result = obj.copy()
        for k, v in result.items():
            if isinstance(v, list):
                result[k] = list(map(self.stringify_metadata, v))
            else:
                result[k] = self.stringify_metadata(v)
        if METADATA in result:
            result[BCDBMETADATA] = json.dumps(result.pop(METADATA))
        return result

    def set_object_attr(self, obj, attr, val):
        setattr(obj, attr, val)
        return obj

    def save_object(self, obj, obj_id, schema=None):

        m = self.get_model_by_schema_url(schema)
        db_obj = None

        try:
            db_obj = m.get(obj_id=obj_id)
        except:
            db_obj = m.new({"id": int(obj_id)})

        obj = self.stringify_metadata(self.delegate_list_metadatata(obj))
        self.set_graph_to_obj(obj, db_obj)
        print("obj: ", obj)
        db_obj.save()

    def set_graph_to_obj(self, graph, obj):
        for k, v in graph.items():
            if isinstance(v, dict):
                self.set_graph_to_obj(v, getattr(obj, k))
            else:
                setattr(obj, k, v)

    def __setitem__(self, k, v):
        self.db[k] = v

    def __getitem__(self, k):
        return self.db[k]

    def list(self):
        return self.db.items()
