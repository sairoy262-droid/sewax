 import express from "express"
import { GetUsers, LoginUsers, logoutuser, RegisterUsers } from "../Controller/user.controller.js";
import { Islogin } from "../middleware/islogin.js";
export const user = express.Router();
user.post("/Register-user",RegisterUsers)
user.get("/get-user",Islogin,GetUsers)
user.post("/login-user",LoginUsers)
user.post("/logout-user",logoutuser)