const mysql2 = require("mysql2/promise");

function createProduct(category) {
  return {
    category,
    supplier_ids: "2,5",
    product_code: `ABCD-${Math.ceil(Math.random() * 999)}`,
    product_name: `Product_Name_${Math.ceil(Math.random() * 999)}`,
  };
}

async function insertTwoProducts(category) {
  //     MYSQL_DB_HOST=localhost
  // MYSQL_DB_PORT=3306
  // MYSQL_DB_USER=root
  // MYSQL_DB_PASS=example
  // MYSQL_DB_SCHEMA=northwind

  let products = [];
  connection = await mysql2.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "example",
    database: "northwind",
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
    host: "localhost",
    port: 3306,
    user: "root",
    password: "example",
    database: "northwind",
  });

  const result = await connection.execute(
    `INSERT INTO northwind.employees (company, last_name, first_name, email_address, job_title) VALUES (?,?,?,?,?)`,
    [company, last_name, first_name, email_address, job_title]
  );
  return result[0];
}

async function insertFakePassword({ userId, password }) {
  connection = await mysql2.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "example",
    database: "northwind",
  });
  const result = await connection.execute(
    `INSERT INTO northwind.employees_credentials (employee_id, password) VALUES (?,?);`,
    [userId, password]
  );
  return result[0];
}

module.exports = { insertTwoProducts, insertFakeUser, insertFakePassword };
