import { signup } from "../controllers/auth.controller";
const express = require("express");

const authRouter = express.Router();
authRouter.post("/signup", signup);


export default authRouter;
