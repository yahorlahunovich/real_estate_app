import { test } from "../controllers/user.controller";
const express = require("express");

const router = express.Router();

router.get("/test", test);

export default router;
