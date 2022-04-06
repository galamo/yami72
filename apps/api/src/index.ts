import express from "express"
import dotenv from "dotenv"
dotenv.config()
import authRouter from "./auth"
import bodyParser from "body-parser"
import verifyToken from "./middleware/auth"

const app = express()
app.use(bodyParser.json())

app.use("/auth", authRouter)
app.use(verifyToken)
app.get("/orders", (req, res, next) => {
    return res.send("YES !!!!")
})

app.use((error, req, res, next) => {
    console.log(error)
    if (error.status) return res.status(error.status).json({ message: "Unauthorized" })
    return res.status(500).json({ message: "something went wrong" })
})

const { PORT } = process.env
app.listen(PORT, () => { console.log("listening to port") })
