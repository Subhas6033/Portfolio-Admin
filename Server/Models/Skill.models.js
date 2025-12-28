import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    skillName: {
      type: String,
      required: true,
    },
    skillImage: {
      publicId: {
        type: String,
        default: "",
      },
      url: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

export const Skill = mongoose.model("Skill", skillSchema);
