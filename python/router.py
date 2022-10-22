from config import app, UNITS_URL
from controllers.get_unit_roster_controller import get_unit_roster_controller
from controllers.get_unit_types_controller import get_unit_types_controller
from controllers.post_unit_to_army_roster_controller import post_unit_roster_controller
from controllers.update_unit_in_army_roster_controller import update_unit_roster_controller


@app.get(f"{UNITS_URL}/types")
def get_unit_types():
    print("Getting unit types")
    return get_unit_types_controller()


@app.get(f"{UNITS_URL}")
def get_unit_roster():
    print("Getting units roster")
    return get_unit_roster_controller()


@app.post(f"{UNITS_URL}")
def post_unit_to_roster():
    print("Posting units roster")
    return post_unit_roster_controller()


@app.put(f"{UNITS_URL}")
def update_unit_in_roster():
    print("Posting units roster")
    return update_unit_roster_controller()
