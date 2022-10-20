from database import getDb, rowsToListOfDict
from models.get_unit_roster_model import getUnitRosterModel


def postUnitToRosterModel(unit_id: int):
    try:
        db = getDb()
        cursor = db.execute(f"""INSERT INTO roster(unit_id, amount) VALUES({unit_id}, 1);""")
        print(f"Inserted {unit_id}, lastId is {cursor.lastrowid}")
        db.commit()
        return getUnitRosterModel()
    except Exception as e:
        print("Error posting units to database")
        print(e)
        return []