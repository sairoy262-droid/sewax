import db from "../Config/db.js";

export const RegisterVendor = async (
  user_id,
  name,
  address,
  number,
  service_id,
) => {
  const query =
    " INSERT into vendors(number,user_id,name,address,service_id) value(?,?,?,?,?)";
  const [result] = await db.query(query, [
    number,
    user_id,
    name,
    address,
    service_id,
  ]);
  return result;
};
//2. Get vendor
export const GetVendor = async () => {
  // and
  // services.description as description
  const [rows] = await db.query(`
    select vendors.*,
    services.name as service_Provided
    from vendors
    left join services
    on vendors.service_id=services.id`);
  return rows;
};
//3.Delete
export const DeleteVendor = async (Id) => {
  const result = await db.query(" Delete  from vendors where Id =?", [Id]);
  return result;
};
//4. update
export const Updatevendor = async (fields, Id) => {
  const columns = Object.keys(fields);
  const values = Object.values(fields);
  const setClause = columns.map((col) => `${col}=?`).join(",");
  const query = `Update vendors set ${setClause} where id=?`;
  const result = await db.query(query, [...values, Id]);
  return result;
};
