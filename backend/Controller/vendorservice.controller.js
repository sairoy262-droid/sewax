import {
  CreateVendorService,
  DeleteByAdmin,
  DeleteVendorService,
  GetMyVendorService,
  GetServiceById,
  GetVendorService,
  UpdateVendorService,
} from "../Services/vendorservice.service.js";
import { generateSlug } from "../Utilities/Generateslug.js";

export const CreateVendorServices = async (req, res) => {
  try {
    const Id = req.user.id;
    const { title, description, location, price, status } = req.body;
    const slug = generateSlug(title);
    const result = await CreateVendorService(
      slug,
      Id,
      title,
      description,
      location,
      price,
      status,
    );
    if (!Id || !title || !description || !location || !price || !status) {
      return res.status(400).json({ message: "Please complete the field" });
    }

    if (!result) {
      return res.status(400).json({ message: "Operation failed" });
    }
    if (result.affectedRows === 0) {
      return res.status(403).json({
        message: "Unauthorized: You Do NOt Have an vendor id in this service",
      });
    }
    res.status(200).json({ message: "Operation succesful" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export const GetVendorServices = async (req, res) => {
  const result = await GetVendorService();
  if (!result) {
    return res.status(400).json({ message: "Operation failed" });
  }
  return res.status(200).json({ result });
};
export const DeleteVendorServices = async (req, res) => {
  try {
    const Id = Number(req.params.Id);
    const User_id = req.user.id;
    const role = req.user.role;
    let result;
    if (!Id) {
      return res.status(400).json({ message: "No Id Found" });
    }
    if (!User_id) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    if (role === "admin") {
      result = await DeleteByAdmin(Id);
    } else {
      result = await DeleteVendorService(Id, User_id);
    }
    if (!result) {
      return res.status(400).json({ message: "Operation failed" });
    }
    if (result[0].affectedRows === 0) {
      return res.status(403).json({
        message: "Unauthorized: You cannot delete this service",
      });
    }
    return res.status(200).json({ message: "Opeartion Success" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export const UpdateVendorServices = async (req, res) => {
  try {
    const fields = req.body;
    const { title } = fields;
    const slug = generateSlug(title);
    const id = Number(req.params.id);
    const result = await UpdateVendorService(fields, id, slug);
    if (!result) {
      return res.status(401).json({ message: "Operation Failed" });
    }
    return res.status(200).json({ message: "Operation succesful" });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res
        .status(409)
        .json({ message: " Services with the same name exist" });
    }
  }
};
export const GetMyVendorServices = async (req, res) => {
  try {
    const user_id = req.user.id;

    const result = await GetMyVendorService(user_id);

    return res.status(200).json({
      result,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const GetServiceByIds = async (req, res) => {
  const Id = req.params.Id;
  const result = await GetServiceById(Id);
  return res.status(200).json({
    result,
  });
};
