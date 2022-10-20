import json
from operator import pos
from flask import request
import json

from models.post_unit_to_unit_roster_model import postUnitToRosterModel


def postUnitRosterController():
    body = request.get_json()
    if body is None:
        return []
    unit_id = body.get("unit_id", 0)
    if unit_id is 0:
        return []
    return postUnitToRosterModel(unit_id)
