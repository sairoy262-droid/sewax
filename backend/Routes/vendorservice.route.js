import express from "express";
import {
  CreateVendorServices,
  DeleteVendorServices,
  GetServiceByIds,
  GetVendorServices,
  UpdateVendorServices,
} from "../Controller/vendorservice.controller.js";
import { Islogin } from "../middleware/islogin.js";
import { GetMyPosts } from "../Controller/servicepost.controller.js";
export const VEndorServiceRoute = express.Router();
VEndorServiceRoute.post("/", Islogin, CreateVendorServices);
VEndorServiceRoute.get("/get", Islogin, GetVendorServices);
VEndorServiceRoute.delete("/delete/:Id", Islogin, DeleteVendorServices);
VEndorServiceRoute.patch("/update/:id", Islogin, UpdateVendorServices);
VEndorServiceRoute.get("/mypost", Islogin, GetMyPosts);
VEndorServiceRoute.get("/mypostbyId/:Id", Islogin, GetServiceByIds);
