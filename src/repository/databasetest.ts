import sqlite3 from 'sqlite3';

const DBSOURCE = 'db.sqlite';

const SQL_USERS_CREATE = `
    CREATE TABLE users ( 
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email VARCHAR(45),
      password VARCHAR(10)
    )`;

const database = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    database.run(SQL_USERS_CREATE, (err) => {
      if (err) {
      } else {
        console.log('Tabela users criada com sucesso.');
      }
    });
  }
});

export { database };
