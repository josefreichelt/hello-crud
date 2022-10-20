from database import getDb, rowsToListOfDict


def getUnitTypesModel():
    try:
        db = getDb()
        rows = db.execute("SELECT * FROM unit_xxtypes").fetchall()
        unit_types = rowsToListOfDict(rows)
        print(f"Got {len(unit_types)} unit types")
        return unit_types
    except Exception as e:
        print("Error getting unit types from database:")
        print(e)
        return []
