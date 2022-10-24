package models

import (
	"fmt"
	"hellocrud/types"
	"hellocrud/utils"

	_ "github.com/mattn/go-sqlite3"
)

func GetUnitTypesFromDb() ([]*types.UnitType, error) {
	var unitTypes []*types.UnitType
	db, err := utils.GetDatabase()
	if err != nil {
		fmt.Println("🛑 Error getting database")
		fmt.Println(err)
		return unitTypes, err
	}
	rows, err := db.Query("SELECT * FROM unit_types")
	if err != nil {
		fmt.Println("🛑 Error executing query")
		fmt.Println(err)
		return unitTypes, err
	}

	for rows.Next() {
		unitType := new(types.UnitType)
		err := rows.Scan(&unitType.UnitId, &unitType.UnitName, &unitType.UnitAttackType, &unitType.UnitDamage, &unitType.UnitHealth, &unitType.UnitCost)
		if err != nil {
			fmt.Println("🛑 Error scanning rows")
			fmt.Println(err)
		} else {
			unitTypes = append(unitTypes, unitType)
		}
	}

	rows.Close()
	db.Close()
	return unitTypes, err
}
