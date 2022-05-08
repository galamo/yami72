const mysql2 = require("mysql2/promise");

const mysql2NotPromise = require("mysql2");

console.log("In DB connection module");
const {
  MYSQL_DB_HOST: host,
  MYSQL_DB_PORT: port,
  MYSQL_DB_USER: user,
  MYSQL_DB_PASS: password,
  MYSQL_DB_SCHEMA: database,
} = process.env;

let connection = null;
let mysql2NotPromiseConnection = null;

async function init() {
  connection = await mysql2.createConnection({
    host,
    port,
    user,
    password,
    database,
  });

  mysql2NotPromiseConnection = await mysql2NotPromise.createConnection({
    host,
    port,
    user,
    password,
    database,
  });

  //   const a = await connection.query("select * from customers");
  //   const [result] = a;
  //   console.log(result);

  const result = await runQuery("select * from customers");
  console.log(result);
}

async function runQuery(query) {
  return new Promise(function (resolve, reject) {
    mysql2NotPromiseConnection.query(query, function (err, result) {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
}


