import { test } from "../controllers/user.controller";
const express = require("express");

const userRouter = express.Router();
userRouter.get("/test", test);

export default userRouter;
