import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRouter from "./auth";
import ordersRouter from "./orders";
import productsRouter from "./products";
import bodyParser from "body-parser";
import verifyToken from "./middleware/auth";
import cors from "cors";
import { initDB, getConnection } from "./db";

initDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/healthcheck", async (req, res) => {
  return res.send("Api is working!");
});
app.use("/auth", authRouter);
app.use(verifyToken);
app.use("/orders", ordersRouter);
app.use("/products", productsRouter);

app.use((error, req, res, next) => {
  console.log(error);
  if (error.status)
    return res.status(error.status).json({ message: "Unauthorized" });
  return res.status(500).json({ message: "something went wrong" });
});

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log("listening to port");
  console.log("listening to port");
  console.log("listening to port");
  console.log("listening to port");
});
