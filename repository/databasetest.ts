import sqlite3 from 'sqlite3';

const DBSOURCE = './repository/db.sqlite';

const SQL_USERS_CREATE = `
    CREATE TABLE users ( 
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email VARCHAR(45),
      password VARCHAR(10)
    )`;

const database = new sqlite3.Database(DBSOURCE, async (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    database.exec(SQL_USERS_CREATE, async (err) => {
      if (err) {
      } else {
        return console.log('Tabela users criada com sucesso.');
      }
    });
  }
});

export { database };
