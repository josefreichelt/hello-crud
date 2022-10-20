from database import getDb, rowsToListOfDict


def getUnitRosterModel():
    try:
        db = getDb()
        rows = db.execute("""SELECT roster.id,roster.amount, unit_types.*
                FROM roster
                INNER JOIN unit_types
                ON roster.unit_id = unit_types.unit_id""").fetchall()
        units = rowsToListOfDict(rows)
        print(f"Got {len(units)} units")
        return units
    except Exception as e:
        print("Error getting units from database")
        print(e)
        return []
