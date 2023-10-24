import express from "express";
import { getListings } from "../controllers/listings.controller.js";

const listingsRouter = express.Router();

listingsRouter.get("/", getListings);

export default listingsRouter;
