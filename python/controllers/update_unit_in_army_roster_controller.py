import json
from operator import pos
from flask import request
import json

from models.update_unit_in_army_roster_model import update_unit_in_roster_model


def update_unit_roster_controller():
    body = request.get_json()
    if body is None:
        return []
    roster_id = body.get("roster_id", 0)
    is_adding = body.get("is_adding", False)
    if roster_id is 0:
        return []
    return update_unit_in_roster_model(roster_id, is_adding)
