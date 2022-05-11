const Joi = require("joi");
import { getConnection } from "../db";
const commonPasswordSchema = Joi.string().min(2).max(16).required();
const changePasswordSchema = Joi.object({
  password: commonPasswordSchema,
  token: Joi.string().required(),
  newPassword: commonPasswordSchema,
  newPasswordConfirm: commonPasswordSchema,
});

function validateChangePasswordMiddleware(req, res, next) {
  const { error } = changePasswordSchema.validate(req.body);
  if (error) return next(new Error(error.message));
  next();
}

function isPasswordMatch(user, passwrod) {
  console.log(user, passwrod);
  return user.password === passwrod;
}

module.exports = {
  isPasswordMatch,
  validateChangePasswordMiddleware,
};
