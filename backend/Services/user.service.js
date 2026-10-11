import db from "../Config/db.js";

//1. REGISTER USER
export const RegisterUser = async (role, Username, email, password, phone) => {
  const query =
    "INSERT into users(role,Username,email,password,phone) VALUES(?,?,?,?,?) ";
  const result = await db.query(query, [
    role,
    Username,
    email,
    password,
    phone,
  ]);
  return result;
};

export const GetUser = async () => {
  const [rows] = await db.query(" SELECT * FROM users");
  return rows;
};
export const LoginUser = async (email) => {
  const [rows] = await db.execute("SELECT * from users where email =?", [
    email,
  ]);
  return rows[0];
};
export const Updateuser = async (Id,fields) => {
   const columns = Object.keys(fields);
  const values = Object.values(fields);
  const setClause = columns.map((col) => `${col}=?`).join(",");
  const query = `Update users set ${setClause} where Id=? `;
  const result = await db.query(query, [...values, Id]);
  return result;
};
