import { getConnection } from "../db";
const { NUMBER_OF_OLD_PASSWORDS } = process.env;
async function isUserExist(userName) {
  const query = `
  SELECT 
  employee_id, employees_credentials.password, email_address
    FROM
  employees
      JOIN
  employees_credentials ON employees.id = employees_credentials.employee_id
    WHERE
  email_address = '${userName}' order by employees_credentials.created_at DESC limit 1
  `;
  console.log(query);
  const [result] = await getConnection().query(query);
  return result[0];
}

async function validateOldPassword({
  userName,
  newPassword,
}: {
  userName: string;
  newPassword: string;
}) {
  const query = `
    SELECT 
    email_address, password
FROM
    (SELECT 
        employee_id,
            employees_credentials.password,
            email_address,
            employees_credentials.created_at
    FROM
        employees
    JOIN employees_credentials ON employees.id = employees_credentials.employee_id
    ORDER BY employees_credentials.created_at DESC
    LIMIT ${NUMBER_OF_OLD_PASSWORDS}) AS resultTable
WHERE
    email_address = '${userName}'
        AND password = '${newPassword}'
  
`;
  console.log(query);
  const [result] = await getConnection().query(query);
  return result[0];
}

async function insertPassword({
  userId,
  newPassword,
}: {
  userId: number;
  newPassword: string;
}) {
  const query = `INSERT INTO northwind.employees_credentials 
  (employee_id, password) VALUES (${userId},'${newPassword}')`;

  console.log(query);
  const [result] = await getConnection().query(query);
  console.log(result);
  return result[0];
}

module.exports = {
  insertPassword,
  isUserExist,
  validateOldPassword,
};
