import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';

export async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
       ca: fs.readFileSync(path.join(process.cwd(),  'ca.pem'))
    }
  });

  return connection;
}
