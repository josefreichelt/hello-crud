from database import get_db
from models.get_unit_roster_model import get_unit_roster_model


def delete_unit_to_roster_model(id_in_roster: int):
    try:
        db = get_db()
        db.execute(f"""DELETE FROM roster WHERE id={id_in_roster};""")
        print(f"Deleted {id_in_roster}")
        db.commit()
        return get_unit_roster_model()
    except Exception as e:
        print("Error posting units to database")
        print(e)
        return []
