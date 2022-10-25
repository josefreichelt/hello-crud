package models

import (
	"fmt"
	"hellocrud/types"
	"hellocrud/utils"

	_ "github.com/mattn/go-sqlite3"
)

func PostUnitInRosterModel(unitId uint) ([]*types.RosterUnit, error) {
	var rosterUnits []*types.RosterUnit

	db, err := utils.GetDatabase()
	if err != nil {
		fmt.Println("🛑 Error getting database")
		fmt.Println(err)
		return rosterUnits, err
	}
	result, err := db.Exec(fmt.Sprintf(`INSERT INTO roster(unit_id, amount) VALUES(%d, 1);`,unitId))
	if err != nil {
		fmt.Println("🛑 Error executing query")
		fmt.Println(err)
		return rosterUnits, err
	}
	_ = result
	db.Close()
	return GetUnitRosterFromDb()

}
