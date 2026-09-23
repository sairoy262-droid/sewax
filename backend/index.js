import express from "express";
import "./Config/db.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { Serviceroute } from "./Routes/services.routes.js";
import { Vendor } from "./Routes/vendor.routes.js";
import { user } from "./Routes/user.route.js";
import cookieParser from "cookie-parser";
import { Servicepost } from "./Routes/service_posts.routes.js";
import { VEndorServiceRoute } from "./Routes/vendorservice.route.js";
import cors from "cors"
dotenv.config();

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_url,
    credentials: true,
  }),
);
app.use("/api/v1/services", Serviceroute);
app.use("/api/v1/vendor", Vendor);
app.use("/api/v1/user", user);
app.use("/api/v1/Servicepost", Servicepost);
app.use("/api/v1/vendor/service", VEndorServiceRoute);


const Port = 3000;

app.listen(Port, () => {
  console.log(`Backend server is running on ${Port}`);
});
