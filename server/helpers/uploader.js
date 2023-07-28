// import cloud from "../configs/cloudinary.js";
import DatauriParser from "datauri/parser.js";
import path from "node:path";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

const parser = new DatauriParser();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (file) => {
  try {
    const extName = path.extname(file?.originalname).toString();
    const file64 = parser.format(extName, file.buffer);

    const uploaded = await cloudinary.v2.uploader.upload(file64.content, {
      folder: "social-app",
    });

    return uploaded.url;
  } catch (error) {
    console.log(error);
  }
};

// module.exports = uploadToCloudinary;
