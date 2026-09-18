import db from "../Config/db.js";

export const RegisterServicePost = async (
  user_id,
  title,
  slug,
  description,
  location,
  budget,
) => {
  const query =
    "Insert into service_posts(user_id,title,description,location,budget,slug) values(?,?,?,?,?,?)";
  const result = await db.query(query, [
    user_id,
    title,
    description,
    location,
    budget,
    slug,
  ]);
  return result;
};
export const GetServicePost = async () => {
  const [row] = await db.query("Select * from service_posts");
  return row;
};
export const GetMyPost = async (user_id) => {
  const [row] = await db.query("Select * from service_posts where user_id=?", [
    user_id,
  ]);
  return row;
};
export const DeleteServicePost = async (Id, user_id) => {
  const result = await db.query(
    "Delete from service_posts where Id =? and user_id=?",
    [Id, user_id],
  );
  return result;
};
export const DeleteServicePostAdmin = async (Id) => {
  const [result] = await db.query("Delete from service_posts where Id =? ", [
    Id,
  ]);
  return result;
};
export const UpdateServicePost = async (fields, Id, user_Id) => {
  const columns = Object.keys(fields);
  const values = Object.values(fields);
  const setClause = columns.map((col) => `${col}=?`).join(",");
  const query = `Update service_posts set ${setClause} where id=? and user_id=?`;
  const result = await db.query(query, [...values, Id, user_Id]);
  return result;
};
export const GetbySlug = async (Slug) => {
  const [rows] = await db.query("SELECT * FROM service_posts WHERE Slug=?", [
    Slug,
  ]);
  return rows[0];
};
export const GetById = async (Id) => {
  const [result] = await db.query("Select * from service_posts  where id=? ", [
    Id,
  ]);
  return result;
};

