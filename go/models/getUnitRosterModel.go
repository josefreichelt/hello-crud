package models

import (
	"fmt"
	"hellocrud/types"
	"hellocrud/utils"

	_ "github.com/mattn/go-sqlite3"
)

func GetUnitRosterFromDb() ([]*types.RosterUnit, error) {
	var rosterUnits []*types.RosterUnit
	db, err := utils.GetDatabase()
	if err != nil {
		fmt.Println("🛑 Error getting database")
		fmt.Println(err)
		return rosterUnits, err
	}
	rows, err := db.Query(`SELECT roster.id,roster.amount, unit_types.*
		FROM roster
		INNER JOIN unit_types
		ON roster.unit_id = unit_types.unit_id`)
	if err != nil {
		fmt.Println("🛑 Error executing query")
		fmt.Println(err)
		return rosterUnits, err
	}

	for rows.Next() {
		rosterUnit := new(types.RosterUnit)
		err := rows.Scan(&rosterUnit.Id, &rosterUnit.Amount, &rosterUnit.UnitId, &rosterUnit.UnitName, &rosterUnit.UnitAttackType, &rosterUnit.UnitDamage, &rosterUnit.UnitHealth, &rosterUnit.UnitCost)
		if err != nil {
			fmt.Println("🛑 Error scanning rows")
			fmt.Println(err)
		} else {
			rosterUnits = append(rosterUnits, rosterUnit)
		}
	}

	rows.Close()
	db.Close()
	return rosterUnits, err
}
