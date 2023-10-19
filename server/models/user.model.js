import mongoose, { Schema } from "mongoose";

const UserProfileSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: {
    type: String,
    default:
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    required: false,
  },
});

const User = mongoose.model("UserProfile", UserProfileSchema);

export default User;
