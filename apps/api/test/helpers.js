const mysql2 = require("mysql2/promise");
require("dotenv").config();




const {
  MYSQL_DB_HOST: host,
  MYSQL_DB_PORT: port,
  MYSQL_DB_USER: user,
  MYSQL_DB_PASS: dbpassword,
  MYSQL_DB_SCHEMA: database,
} = process.env;

function createProduct(category) {
  return {
    category,
    supplier_ids: "2,5",
    product_code: `ABCD-${Math.ceil(Math.random() * 999)}`,
    product_name: `Product_Name_${Math.ceil(Math.random() * 999)}`,
  };
}

async function insertTwoProducts(category) {
  let products = [];
  connection = await mysql2.createConnection({
    host,
    port,
    user,
    password: dbpassword,
    database,
  });

  for (let index = 0; index < 2; index++) {
    const product = createProduct(category);
    products.push(product);
    const result = await connection.execute(
      `INSERT INTO northwind.products
          (supplier_ids, product_code, product_name, category) VALUES 
          (?, ?, ?, ?)`,
      [
        product.supplier_ids,
        product.product_code,
        product.product_name,
        product.category,
      ]
    );
  }
  return products;
}

async function insertFakeUser({
  company,
  last_name,
  first_name,
  email_address,
  job_title,
}) {
  connection = await mysql2.createConnection({
    host,
    port,
    user,
    password: dbpassword,
    database,
  });

  const result = await connection.execute(
    `INSERT INTO northwind.employees (company, last_name, first_name, email_address, job_title) VALUES (?,?,?,?,?)`,
    [company, last_name, first_name, email_address, job_title]
  );
  return result[0];
}

async function insertFakePassword({ userId, password }) {
  connection = await mysql2.createConnection({
    host,
    port,
    user,
    password: dbpassword,
    database,
  });
  const result = await connection.execute(
    `INSERT INTO northwind.employees_credentials (employee_id, password) VALUES (?,?);`,
    [userId, password]
  );
  return result[0];
}

module.exports = { insertTwoProducts, insertFakeUser, insertFakePassword };
