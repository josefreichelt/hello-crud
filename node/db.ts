import { Database, OPEN_READWRITE, verbose } from 'sqlite3';
import { resolve } from 'path';

verbose();

export const db = new Database(
    resolve(__dirname, '../database.sqlite'),
    OPEN_READWRITE,
    (err) => {
        if (err) {
            console.error('🛑 Error opening database file! ', err);
        }
    }
);
