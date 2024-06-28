
import mysql from "mysql2/promise";

const config = {
    user: "queso",
    password: "pan",
    host: "localhost",
    database: "tp4"
}

export const conn = await mysql.createConnection(config);
