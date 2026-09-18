import Jwt from "jsonwebtoken"
export const Islogin = (req, res, next) => {
  const token = req.cookies?.token;
  

  if (!token) {
    return res.status(401).json({ message: " Unauthorized please log in" });
  }

  try {
    const decode = Jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).json({ message: " Invalid or expired token" });
  }
};
