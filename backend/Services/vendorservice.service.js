import db from "../Config/db.js";

export const CreateVendorService = async (
  slug,
  user_id,
  title,
  description,
  location,
  price,
  status,
) => {
  const query = `
    INSERT INTO vendor_service_posts
    (vendor_id, slug, title, description, location, price, status)
    SELECT id, ?, ?, ?, ?, ?, ?
    FROM vendors
    WHERE user_id = ?
  `;
  const [result] = await db.query(query, [
    slug,
    title,
    description,
    location,
    price,
    status || "active",
    user_id,
  ]);
  return result;
};
export const GetVendorService = async () => {
  const [result] = await db.query("Select * from vendor_service_posts");
  return result;
};
export const DeleteVendorService = async (Id, User_id) => {
  const result = await db.execute(
    "Delete from vendor_service_posts where id =? and vendor_id = (Select id from vendors  where User_id= ?)",
    [Id, User_id],
  );

  return result;
};
export const DeleteByAdmin = async (Id) => {
  const result = await db.execute(
    "Delete  from vendor_service_posts where Id =?",
    [Id],
  );

  return result;
};
export const UpdateVendorService = async (fields, id, slug) => {
  const columns = Object.keys(fields);
  const Values = Object.values(fields);
  if (fields.title) {
    columns.push("slug");
    Values.push(slug);
  }
  const setClause = columns.map((col) => `${col}=?`).join(",");
  const query = `Update vendor_service_posts set ${setClause} where id=?`;
  const result = await db.query(query, [...Values, id]);
  return result;
};
export const GetMyVendorService = async (user_id) => {
  const [result] = await db.execute(
    "Select * from vendor_service_posts where vendor_id =(select id from vendors where user_id=?) ",
    [user_id],
  );
  return result;
};
 export const GetServiceById= async(Id)=>{
  const [result] = await db.execute(
    "Select * from vendor_service_posts where id =?",[Id]
  );
  return result;
 }