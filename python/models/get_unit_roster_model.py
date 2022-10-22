from database import get_db, rows_to_list_of_dict


def get_unit_roster_model():
    try:
        db = get_db()
        rows = db.execute("""SELECT roster.id,roster.amount, unit_types.*
                FROM roster
                INNER JOIN unit_types
                ON roster.unit_id = unit_types.unit_id""").fetchall()
        units = rows_to_list_of_dict(rows)
        print(f"Got {len(units)} units")
        return units
    except Exception as e:
        print("Error getting units from database")
        print(e)
        return []
