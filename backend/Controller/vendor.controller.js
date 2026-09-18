import {
  DeleteVendor,
  GetVendor,
  RegisterVendor,
  Updatevendor,
} from "../Services/vendor.service.js";

export const RegisterVendors = async (req, res) => {
  try {
    const { user_id, name, address, number, service_id } = req.body;
    if (!name || !user_id || !address || !number || !service_id) {
      return res.status(400).json({
        message: "please fill all the fields",
      });
    }
    const result = await RegisterVendor(
      user_id,
      name,
      address,
      number,
      service_id,
    );
    if (!result) {
      return res.status(400).send("Error creating Vendor");
    }
    res.status(201).json({ message: "Vendor created succesfully" });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        message: " Services with the same creditinals or userid  exist",
      });
    }
  }
  res.status(500).json({ message: " Internal Server Error" });
};
export const GetVendors = async (req, res) => {
  try {
    const result = await GetVendor();
    if (!result) {
      return res.status(400).json({ message: "error deleting the vendor" });
    }
    return res.status(201).json({ message: "Succesful vendor", result });
  } catch (error) {
    res.send("something went wrong ", error);
  }
};
//Delete
export const DeleteVendors = async (req, res) => {
  try {
    const  Id = Number(req.params.id);
    console.log(Id)
    if (!Id) {
      return res.status(400).json({ message: "Id not found " });
    }
    const result = await DeleteVendor(Id);
    if (!result) {
      return res.status(400).json({ message: "error deleting " });
    }
    return res.status(200).json({ message: "Vendor succesfully deleted " });
  } catch (error) {
    console.log(error);
    res.send("something went wrong ", error);
  }
};
//update
export const UpdateVendors = async (req, res) => {
  try {
    const Id = Number(req.params.id);
    const fields = req.body;
    if (Object.keys(fields).length === 0)
      return res.status(400).json({
        success: true,
        message: "No fields",
      });
    const result = await Updatevendor(fields, Id);
    if (result[0].affectedRows === 0) {
      return res.status(404).json({
        message: "Product not found of id: ${id}",
      });
    }
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.log(error);
    res.send("something went wrong");
  }
};
