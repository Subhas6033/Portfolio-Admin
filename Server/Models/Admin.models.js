import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    resumeUrl: {
      type: String,
      required: true,
      trim: true,
    },
    achievements: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Admin = mongoose.model("Admin", adminSchema);
