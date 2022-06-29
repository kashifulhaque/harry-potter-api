const mysql = require("mysql2/promise");

export async function getData(tableName, id = -1) {
  let query = '';
  let data = {};
  let status = 200;
  let returnValue = {};
  const connection = await mysql.createConnection(process.env.DATABASE_URL);

  try {
    if (id == -1) {
      query = `select * from ${tableName}`;
      const [rows] = await connection.query(query);
      data = rows;
    } else {
      query = `select * from ${tableName} where ${tableName}.id=?`;
      const [rows] = await connection.query(query, [id]);

      if(!rows[0]) {
        data.message = `No ${tableName == 'hp_character' ? 'Character' : 'Wand'} with ID ${id}`;
        status = 404;
      } else {
        data = rows[0];
      }
    }
  } catch(err) {
    status = 500;
    data.message = 'Something went wrong';
  }
  
  returnValue.status = status;
  returnValue.data = data;
  return returnValue;
}
