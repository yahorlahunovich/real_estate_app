import mongoose, { Schema } from "mongoose";

const ListingSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: {
    type: String,
    required: true,
  },
});

const ListingModel = mongoose.model("ListingModel", ListingSchema);

export default ListingModel;
