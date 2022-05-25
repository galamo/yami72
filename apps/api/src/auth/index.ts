import express from "express";
const router = express.Router();
const {
  isPasswordMatch,
  validateChangePasswordMiddleware,
} = require("./validations");

const {
  isUserExist,
  validateOldPassword,
  insertPassword,
} = require("./businessLogic");
import jwt from "jsonwebtoken";
import { users } from "../data";
import verifyToken from "../middleware/auth";
import { signToken } from "./helper";
// const { changeUserPassword } = require("./controller")

router.post("/login", loginHandler);
router.post("/logout", logoutHandler);
router.post("/register", registerHandler);
router.post(
  "/change-password",
  verifyToken,
  validateChangePasswordMiddleware,
  changePasswordHandler
);

function logoutHandler(req, res) {
  const authorizationHeader = req.headers["authorization"];
  if (!authorizationHeader) return res.status(400).json();
  // const success = removeSession(authorizationHeader)
  // if (!success) return res.status(400).json()
  res.json({ message: "user logged out" });
}

async function loginHandler(req, res, next) {
  const { userName, password } = req.body;
  console.log(userName, "userName");
  const currentUser = await isUserExist(userName);
  if (!currentUser) return res.status(404).send("User not found");
  console.log(currentUser);
  if (!isPasswordMatch(currentUser, password))
    return res.status(401).send("User not Authorized - Go to Hell!");
  // const { ONLY THE KEYS I WANT!!! } = currentUser
  const { first_name, last_name, email_address, employee_id } = currentUser;
  const token = signToken({
    first_name,
    last_name,
    email_address,
    employee_id,
  });
  return res.json({ userName, message: `Success`, token });
}

function registerHandler(req, res, next) {
  const { userName, password } = req.body;
  res.json({ userName, password, message: `Success` });
}

async function changePasswordHandler(req, res, next) {
  const { password, token, newPassword, newPasswordConfirm } = req.body;
  const userName = req?.userData?.email_address;
  if (!userName) return res.status(401).send("User Error");
  const currentUser = await isUserExist(userName);
  if (!currentUser) return res.status(404).send("User not found");

  if (!isPasswordMatch(currentUser, password))
    return res.status(401).send("User not Authorized - Go to Hell!");
  if (newPassword !== newPasswordConfirm)
    return res.status(409).send("Password confirm not match");
  if (await validateOldPassword({ userName, newPassword })) {
    return res
      .status(409)
      .send("New password cannot be the same as your old password");
  }
  console.log(newPassword);
  const result = await insertPassword({
    userId: currentUser.employee_id,
    newPassword,
  });
  res.send("ok");
}

function validateParams(req, res, next) {
  const { password, userName, newPassword, newPasswordConfirm } = req.body;
  if (!password || !userName || !newPassword || !newPasswordConfirm)
    return res.status(400).send("missing paramters");
  next();
}

export default router;
