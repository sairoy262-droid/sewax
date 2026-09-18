import { GetUser, LoginUser, RegisterUser } from "../Services/user.service.js";
import bycrypt from "bcrypt";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";
export const RegisterUsers = async (req, res) => {
  try {
    const {  role, Username, email, password, phone } = req.body;
    if ( !role || !Username || !email || !password || !phone) {
      return res.status(400).json({
        message: "please fill all the fields",
      });
    }
    if (password.length <= 6) {
      return res
        .status(400)
        .json({ message: " Password can't be shorter then 6 Letters" });
    }
    const hashpassword = await bycrypt.hash(password, 10);
    const result = await RegisterUser(
      role,
      Username,
      email,
      hashpassword,
      phone,
    );
    if (!result) {
      return res.status(400).send("Error creating Services");
    }
    res.status(201).json({ message: "User created succesfully" });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res
        .status(409)
        .json({ message: " User with the same CReditinals exist" });
    }
    res.status(500).json({ message: " Internal Server Error" });
  }
};
export const GetUsers = async (req, res) => {
  try {
    const result = await GetUser();
    if (!result) {
      return res.status(404).send("user not found");
    }
    const usersWithoutPassword = result.map(({ password, ...user }) => user);
    res.status(200).json(usersWithoutPassword);
  } catch (error) {
    res.send("something went wrong ", error);
  }
};
export const LoginUsers = async (req, res) => {
  const { email, password } = req.body;
  const result = await LoginUser(email);
  if (!result) {
    return res.status(400).json({ message: "Email not match" });
  }
  const isMatch = await bycrypt.compare(password, result.password);
  if (!isMatch) {
    return res.status(400).json({ message: "creditinals do not match" });
  }
  const token = JWT.sign(
    {
      id: result.id,
      role: result.role,
      username: result.username,
      phone: result.phone,
      email: result.email,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: process.env.JWT_EXPIRE },
  );
  const { password: _, ...userWithoutPassword } = result;
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAGE: 7 * 24 * 60 * 60 * 100,
  });

  res.status(200).json({
    status: 200,
    message: "Login success",
    user: userWithoutPassword,
    token: token,
  });
};
export const logoutuser = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout Success" });
};
