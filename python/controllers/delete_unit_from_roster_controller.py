from flask import request

from models.delete_unit_from_roster_model import delete_unit_to_roster_model


def delete_unit_roster_controller():
    body = request.get_json()
    if body is None:
        return []
    roster_id = body.get("roster_id", 0)
    if roster_id is 0:
        return []
    return delete_unit_to_roster_model(roster_id)
