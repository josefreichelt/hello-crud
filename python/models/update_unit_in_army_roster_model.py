from database import get_db
from models.get_unit_roster_model import get_unit_roster_model


def update_unit_in_roster_model(id_in_roster: int, is_adding: bool):
    try:
        db = get_db()
        db.execute(
            f"""UPDATE roster SET amount = amount + {1 if is_adding else -1} WHERE id={id_in_roster}""")
        print(f"Updated {id_in_roster}")
        db.commit()
        return get_unit_roster_model()
    except Exception as e:
        print("Error posting units to database")
        print(e)
        return []
