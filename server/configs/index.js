import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;

export const COR_OPTIONS = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
};

export const SOCKET_OPTIONS = {
  pingTimeout: 60000,
  cors: {
    origin: process.env.CLIENT_URL,
  },
};

export const SESSION_OPTIONS = {
  name: "ss",
  secret: process.env.SESSION_SECRET_KEY,
  maxAge: 24 * 60 * 60 * 1000,
};

// module.exports = {
//   PORT: process.env.PORT,
//   CLIENT_URL: process.env.CLIENT_URL,

//   SESSION_SECRET_KEY: process.env.SESSION_SECRET_KEY,
//   SESSION_SECRET: process.env.SESSION_SECRET,

//   MONGO_URL: process.env.MONGO_URL,

//   ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
//   REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,

//   FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
//   FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET,

//   CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
//   CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
//   CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,

//   COR_OPTIONS,

//   SOCKET_OPTIONS,

//   SESSION_OPTIONS,
// };
