import mongoose from "mongoose";
import userRouter from "./routes/user.route";
import authRouter from "./routes/auth.route";

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err: any) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
