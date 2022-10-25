package models

import (
	"fmt"
	"hellocrud/types"
	"hellocrud/utils"

	_ "github.com/mattn/go-sqlite3"
)

func UpdateUnitInRosterModel(rosterId uint,isAdding bool) ([]*types.RosterUnit, error) {
	var rosterUnits []*types.RosterUnit
	amount := 0
	if isAdding {
		amount = 1
	}else {
		amount = -1
	}
	db, err := utils.GetDatabase()
	if err != nil {
		fmt.Println("🛑 Error getting database")
		fmt.Println(err)
		return rosterUnits, err
	}
	result, err := db.Exec(fmt.Sprintf(`UPDATE roster SET amount = amount + %d WHERE id=%d;`,amount,rosterId))
	if err != nil {
		fmt.Println("🛑 Error executing query")
		fmt.Println(err)
		return rosterUnits, err
	}
	_ = result
	db.Close()
	return GetUnitRosterFromDb()

}
