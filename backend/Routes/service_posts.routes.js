import express from "express"
import { DeleteServicePosts, GetByIds, GetbySlugs, GetMyPosts, GetServicePosts, RegisterServicePosts, UpdateServicePosts } from "../Controller/servicepost.controller.js";
import { Islogin } from "../middleware/islogin.js";
export const Servicepost = express.Router();
Servicepost.post("/post-Servicepost",Islogin,RegisterServicePosts);
Servicepost.get("/get-Servicepost", Islogin, GetServicePosts);
Servicepost.get("/get-MyServicepost", Islogin, GetMyPosts);
Servicepost.get("/get-ByIdServicepost/:id", Islogin, GetByIds);
Servicepost.get("/get-bySlugServicepost/:Slug", Islogin, GetbySlugs);
Servicepost.delete("/delete-Servicepost/:Id", Islogin, DeleteServicePosts);
Servicepost.patch("/update-Servicepost/:Id", Islogin, UpdateServicePosts);