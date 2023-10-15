import { test } from "../controllers/user.controller.js";
import express from "express";

const userRouter = express.Router();
userRouter.get("/test", test);

export default userRouter;
