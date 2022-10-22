from database import get_db
from models.get_unit_roster_model import get_unit_roster_model


def post_unit_to_roster_model(unit_id: int):
    try:
        db = get_db()
        cursor = db.execute(
            f"""INSERT INTO roster(unit_id, amount) VALUES({unit_id}, 1);""")
        print(f"Inserted {unit_id}, lastId is {cursor.lastrowid}")
        db.commit()
        return get_unit_roster_model()
    except Exception as e:
        print("Error posting units to database")
        print(e)
        return []
