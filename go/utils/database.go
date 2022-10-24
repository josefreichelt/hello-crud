package utils

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

func GetDatabase() (*sql.DB, error) {
	dbPath := "../database.sqlite"
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		fmt.Println("🛑 Error openning database")
		fmt.Println(err)
		return nil, err

	}
	return db, nil
}
