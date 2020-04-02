# What is Transcrypt

A python to javascript compiler, you can convert python code to working javascript code and import in your application

# Install

`pip3 install transcrypt`


# compile code

`transcrypt -n {myfile}.py`

# Limitation

- Not all  python standard libs are supported like `json`, `urllib3`, ...
- 3rd party libs are mostly not supported at all


# Examples

- websockets
    ```
    class Person:
        def __init__(self, name, number):
            self.ws = __new__(WebSocket(self.ws_url))
            self.ws.onopen = self.onopen
            self.ws.onmessage = self.onmessage
            self.ws.onclose = self.onclose
            self.ws.onerror = self.onerror

            self._name = name
            self._number = number

        @property
        def ws_url(self):
            return (
                window.location.protocol.replace("http", "ws") + "//" + window.location.host + "/svelte_example/websocket"
            )

        def get_number(self):
            return self._number

        def set_number(self, value):
            self._number = value
            self.ws.send(f"set:{self.json()}")

        def get_name(self):
            return self._name

        def set_name(self, value):
            self._name = value
            self.ws.send(f"set:{self.json()}")

        name = property(get_name, set_name)
        number = property(get_number, set_number)

        def json(self):
            return JSON.stringify({"name": self.name, "number": self.number})

        def onopen(self, e):
            console.log("opened")

        def onmessage(self, e):
            console.log(e.data)

        def onclose(self, e):
            console.log(e)

        def onerror(self, e):
            console.log(e)
    ```

- simple setters and using http
    ```
    class Company:
        def success(self, data):
            console.log(data)

        def fail(self, err):
            console.log(err)

        def add_company(self, data, callback):
            console.log("data passed", data)
            return axios.post("/jumpsc`ale/svelte/model/jumpscale.svelte.company.1", data)
    ```


# Consclusion

- Looks OK at first glance but mostly you will write js code , due to the previous limitations discussed above
so we don't find a point of using it
