import mysql from "mysql2/promise";
import {env} from "./env"

const pool = mysql.createPool({
  host: env.db.host,
  user: env.db.user,
  password: env.db.password,
  database: env.db.database,
  waitForConnections: true,
  connectionLimit: Number(env.db.connectionLimit) || 10,
  queueLimit: 0,
});

export default pool;
