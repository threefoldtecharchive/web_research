# What is Transcrypt

A python to javascript compiler, you can convert python code to working javascript code and import in your application

# Install

`pip3 install transcrypt`


# compile code

`transcrypt -n {myfile}.py`

# Limitation

- Not all  python standard libs are supported like `json`, `urllib3`, ...
- 3rd party libs are mostly not supported at all
- We can not transcrypt our jsx baseclasses to javascript, too complex
- If we are going to build extra jsx simple baseclasses to be used with transcypt, why not building it in javascript to begin with
- Ugly and mixed javascript & python code
- If you want to manipulate templates, or css, you'll have to do it in a non standard way here
- another issue if you want to use http client like javascript `axios`, you have to import in your application itself, not in the transcrypted file
which makes the transcrypted file not modular, u have to ask user to include certain dependencies in their app and expose them in a way that
when the transcrypted js files can see them in order to work which again can cause complexity and errors and not simple development process
- Extra layer of compilation !!
- If we are going to write much js code in the transcrypted file, why not going directly for js? making things consistent

# Personal opinion (Hamdy)
Spending time building pure javascript libs that are framework independent could be worthy on the long term


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
