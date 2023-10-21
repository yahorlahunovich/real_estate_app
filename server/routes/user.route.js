import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import express from "express";

const userRouter = express.Router();
userRouter.get("/test", test);
userRouter.post("/update/:id", verifyToken, updateUser);

export default userRouter;
