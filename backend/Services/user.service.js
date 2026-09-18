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
