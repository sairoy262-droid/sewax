 import express from "express"
import { GetUsers, LoginUsers, logoutuser, RegisterUsers, Updateusers } from "../Controller/user.controller.js";
import { Islogin } from "../middleware/islogin.js";
import { isAdmin } from "../middleware/isAdmin.js";
export const user = express.Router();
user.post("/Register-user",RegisterUsers)
user.get("/get-user",Islogin,GetUsers)
user.post("/login-user",LoginUsers)
user.post("/logout-user",logoutuser)
user.patch("/update-user/:Id",Islogin,isAdmin, Updateusers);