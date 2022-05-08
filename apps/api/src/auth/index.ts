import express from "express";
const router = express.Router();
const {
  isUserExist,
  isPasswordMatch,
  validateChangePasswordMiddleware,
} = require("./validations");
import jwt from "jsonwebtoken";
import { users } from "../data";
// const { changeUserPassword } = require("./controller")

router.post("/login", loginHandler);
router.post("/logout", logoutHandler);
router.post("/register", registerHandler);
router.post(
  "/change-password",
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
  const currentUser = await isUserExist(userName);
  if (!currentUser) return res.status(404).send("User not found");
  console.log(currentUser);
  if (!isPasswordMatch(currentUser, password))
    return res.status(401).send("User not Authorized - Go to Hell!");
  // const { ONLY THE KEYS I WANT!!! } = currentUser
  const { first_name, last_name } = currentUser;
  const token = jwt.sign(
    { data: { first_name, last_name, password: null, role: "viewer" } },
    process.env.SECRET,
    { expiresIn: "10h" }
  );
  return res.json({ userName, message: `Success`, token });
}

function registerHandler(req, res, next) {
  const { userName, password } = req.body;
  res.json({ userName, password, message: `Success` });
}

function changePasswordHandler(req, res, next) {
  const { password, userName, newPassword, newPasswordConfirm } = req.body;
  const currentUser = isUserExist(users, userName);
  if (!currentUser) return res.status(404).send("User not found");
  if (!isPasswordMatch(currentUser, password))
    return res.status(401).send("User not Authorized - Go to Hell!");
  if (newPassword !== newPasswordConfirm)
    return res.status(409).send("Password confirm not match");
  // changeUserPassword(currentUser, newPasswordConfirm)
  return res.json({ message: "Password changed succeed" });
}

function validateParams(req, res, next) {
  const { password, userName, newPassword, newPasswordConfirm } = req.body;
  if (!password || !userName || !newPassword || !newPasswordConfirm)
    return res.status(400).send("missing paramters");
  next();
}

export default router;
