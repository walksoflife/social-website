import Joi from "joi";

const name = Joi.string().required().min(4);
const username = Joi.string().min(4).max(30).required();
const email = Joi.string()
  .email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  })
  .required()
  .max(30);
const password = Joi.string()
  .pattern(/^[a-zA-Z0-9]{6,30}$/)
  .required();
const confirmPassword = Joi.ref("password");

export const registerSchema = Joi.object({
  name,
  email,
  username,
  password,
  confirmPassword,
});

export const loginSchema = Joi.object({
  email,
  password,
});

// module.exports = { registerSchema, loginSchema };
