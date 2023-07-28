import jwt from "jsonwebtoken";
import createError from "http-errors";
// import { ACCESS_TOKEN_SECRET } = require("../configs");
import dotenv from "dotenv";
dotenv.config();

export const verifyAccessToken = (req, res, next) => {
  try {
    if (!req.headers["authorization"]) throw createError.Unauthorized();
    const authHeader = req.headers["authorization"];
    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) return next(createError.Unauthorized(err.message));

      req.user = decoded;
      next();
    });
  } catch (error) {
    console.log(error);
  }
};

// module.exports = { verifyAccessToken };
