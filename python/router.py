from config import app, UNITS_URL
from controllers.get_unit_roster_controller import getUnitRosterController
from controllers.get_unit_types_controller import getUnitTypesController
from controllers.post_unit_to_army_roster_controller import postUnitRosterController


@app.get(f"{UNITS_URL}/types")
def getUnitTypes():
    print("Getting unit types")
    return getUnitTypesController()


@app.get(f"{UNITS_URL}")
def getUnitRoster():
    print("Getting units roster")
    return getUnitRosterController()


@app.post(f"{UNITS_URL}")
def postUnitToRoster():
    print("Posting units roster")
    return postUnitRosterController();