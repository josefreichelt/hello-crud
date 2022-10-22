import atexit
from os import path, getcwd
import sqlite3
from flask import g
from config import app
DATABASE_FILE = path.realpath(path.join(getcwd(), "../database.sqlite"))


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        print("Openning connection to database")
        db = g._database = sqlite3.connect(DATABASE_FILE)
        db.row_factory = sqlite3.Row
    return db


@app.teardown_appcontext
def close_db(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()
        print("Closing connection to database\n")


def row_to_dict(row: sqlite3.Row):
    return dict(zip(row.keys(), row))


def rows_to_list_of_dict(rows: list[sqlite3.Row]):
    newList = []
    for row in rows:
        newList.append(row_to_dict(row))
    return newList


atexit.register(close_db)
