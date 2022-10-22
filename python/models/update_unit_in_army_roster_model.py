from database import getDb, rowsToListOfDict
from models.get_unit_roster_model import getUnitRosterModel


def update_unit_in_roster_model(id_in_roster: int, is_adding: bool):
    try:
        db = getDb()
        db.execute(f"""UPDATE roster SET amount = amount + {1 if is_adding else -1} WHERE id={id_in_roster}""")
        print(f"Updated {id_in_roster}")
        db.commit()
        return getUnitRosterModel()
    except Exception as e:
        print("Error posting units to database")
        print(e)
        return []