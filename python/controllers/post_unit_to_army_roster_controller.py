from flask import request

from models.post_unit_to_unit_roster_model import post_unit_to_roster_model


def post_unit_roster_controller():
    body = request.get_json()
    if body is None:
        return []
    unit_id = body.get("unit_id", 0)
    if unit_id is 0:
        return []
    return post_unit_to_roster_model(unit_id)
