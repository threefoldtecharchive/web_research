from Jumpscale import j
import sys
import pathlib
from geventwebsocket import WebSocketApplication, WebSocketServer, Resource
from collections import OrderedDict


class Package(j.baseclasses.threebot_package):
    def prepare(self):
        for port in (443, 80):
            website = self.openresty.get_from_port(port)

            locations = website.locations.get(name=f"gundb_locations{port}")

            ws_location = locations.get_location_proxy("gundb")
            ws_location.path_url = "/gun"
            ws_location.ipaddr_dest = "127.0.0.1"
            ws_location.port_dest = 7766
            ws_location.path_dest = "/gun"
            ws_location.scheme = "http"
            ws_location.type = "websocket"
            # ws_location.is_auth = True

            examples_location = locations.get_location_proxy("gundb_examples")
            examples_location.path_url = "/gun/static"
            examples_location.ipaddr_dest = "127.0.0.1"
            examples_location.port_dest = 7767
            examples_location.path_dest = "/static"
            examples_location.scheme = "http"
            # ws_location.is_auth = True

            website.configure()

        self.openresty.reload()

    def start(self):
        sys.path.append(str(pathlib.Path(__file__).parent.parent.absolute()))
        from gundb.geventserver import GeventGunServer
        from gundb.server import app

        GeventGunServer.backend = "redis"

        ws_server = WebSocketServer(("", 7766), Resource(OrderedDict([("/gun", GeventGunServer)])))
        self.gevent_rack.add(name="gundb", server=ws_server)

        self.gevent_rack.bottle_server_add(name="gundb_examples", port=7767, app=app)
