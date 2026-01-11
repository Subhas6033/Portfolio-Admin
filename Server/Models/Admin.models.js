import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: [
        /^goalkeepersubhas07@gmail\.com$/,
        "Only admin email is allowed for this operation.",
      ],
    },
    mobileNumber: {
      type: String,
      required: true,
      trim: true,
    },
    profilePhoto: {
      url: {
        type: String,
        default: null,
      },
      public_id: {
        type: String,
        default: null,
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    refreshToken: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Hash the password before saving in the database
adminSchema.pre("save", async (next) => {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Attach method to compare password
adminSchema.methods.isPasswordCorrect = async (password) => {
  return await bcrypt.compare(password, this.password);
};

// Attach method to generate refreshToken
adminSchema.methods.generateRefreshToken = () => {
  return jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  });
};

// Attach method to generate accessToken
adminSchema.methods.generateAccessToken = () => {
  return jwt.sign(
    { _id: this._id, email: this.email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

// Hash the refreshToken before saving in the database
adminSchema.methods.hashRefreshToken = async (refreshToken) => {
  const salt = await bcrypt.genSalt(10);
  const hashedRefreshToken = await bcrypt.hash(refreshToken, salt);
  this.refreshToken = hashedRefreshToken;
  return this.refreshToken;
};

// Attach method to compare refreshToken with the hashed version
adminSchema.methods.isRefreshTokenCorrect = async (refreshToken) => {
  return await bcrypt.compare(refreshToken, this.refreshToken);
};

export const Admin = mongoose.model("Admin", adminSchema);
