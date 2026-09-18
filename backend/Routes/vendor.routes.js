import Express from "express";
import {
    DeleteVendors,
  GetVendors,
  RegisterVendors,
  UpdateVendors,
} from "../Controller/vendor.controller.js";
import { Islogin } from "../middleware/islogin.js";
import { isAdmin } from "../middleware/isAdmin.js";
export const Vendor = Express.Router();

Vendor.post("/post-vendor", Islogin, isAdmin, RegisterVendors);
Vendor.get("/get-vendor", Islogin, isAdmin, GetVendors);
Vendor.delete("/delete-vendor/:id", Islogin, isAdmin, DeleteVendors);
Vendor.patch("/update-vendor/:id", Islogin, isAdmin, UpdateVendors);
