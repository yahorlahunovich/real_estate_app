import ListingSchema from "../models/listing.model.js";

export const getListings = async (req, res) => {
  try {
    const listings = await ListingSchema.find();
    res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};
