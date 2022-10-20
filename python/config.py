from flask import Flask
from flask_cors import CORS


def create_app():
    print("Initiating flask app")
    app = Flask(__name__)
    CORS(app)
    return app


app = create_app()
BASE_URL = "/api/v1"
UNITS_URL = f"{BASE_URL}/units"
