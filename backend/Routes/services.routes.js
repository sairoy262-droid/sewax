import express from "express";
import { createservices, DeletServices, GetServices } from "../Controller/services.controller.js";
import { Islogin } from "../middleware/islogin.js";
import { isAdmin } from "../middleware/isAdmin.js";

export const Serviceroute = express.Router();
Serviceroute.post("/post-services",createservices);
Serviceroute.get("/get-services",Islogin,isAdmin, GetServices);
Serviceroute.delete("/delete/services/:id",Islogin,isAdmin, DeletServices);
