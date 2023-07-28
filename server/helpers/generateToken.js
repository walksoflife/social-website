import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const TIMEOUT_ACCESS_TOKEN = "30d";

export const generateAccessToken = (userId) => {
  const payload = { userId };

  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: TIMEOUT_ACCESS_TOKEN,
  });

  return token;
};

// module.exports = { generateAccessToken };
