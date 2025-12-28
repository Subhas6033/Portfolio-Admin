import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      url: {
        type: String,
        default: "",
      },
      publicId: {
        type: String,
        default: "",
      },
    },
    githubUrl: {
      type: String,
      required: true,
      trim: true,
      match: /^https?:\/\/.+/,
    },
    liveProjectUrl: {
      type: String,
      required: true,
      trim: true,
      match: /^https?:\/\/.+/,
    },
  },
  { timestamps: true }
);

export const Project = mongoose.model("Project", projectSchema);
