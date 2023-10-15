import { signup } from "../controllers/auth.controller.js";
import express from "express";
const authRouter = express.Router();
authRouter.post("/signup", signup);


export default authRouter;
