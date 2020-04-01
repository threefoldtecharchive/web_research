from flask import Flask, request, send_from_directory, send_file, render_template, jsonify
import os

dir_path = os.path.dirname(os.path.realpath(__file__))


app = Flask(__name__)


@app.route("/static/<string:name>")
def send_public(name):
    print("static" + "/" + dir_path)
    return send_from_directory(dir_path + "/examples/", filename=name)
