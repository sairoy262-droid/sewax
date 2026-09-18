import db from "../Config/db.js";
//1. Registring services
export const Createservice = async (name, description) => {
  const query = " INSERT into services(name,description)  VALUES (?, ?)";

  const result = await db.query(query, [name, description]);
  return result;
};
//2. Get service for future use
export const GetService = async (req, res) => {
  const [rows] = await db.query(" SELECT * FROM services");
  return rows;
};
//3. Delete SErvice
export const DeleteService = async (id) => {
  const query = `DELETE from services where id= ? `;
  const result = await db.query(query, [id]);
  return result;
};
