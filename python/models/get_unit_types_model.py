from database import get_db, rows_to_list_of_dict


def get_unit_types_model():
    try:
        db = get_db()
        rows = db.execute("SELECT * FROM unit_types").fetchall()
        unit_types = rows_to_list_of_dict(rows)
        print(f"Got {len(unit_types)} unit types")
        return unit_types
    except Exception as e:
        print("Error getting unit types from database:")
        print(e)
        return []
