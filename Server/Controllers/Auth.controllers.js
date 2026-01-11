import { asyncHandler, APIERR, APIRES } from "../Utils/index.utils.js";
import { Admin } from "../Models/Admin.models.js";

const generateRefreshAndAccessToken = async (userId) => {
  try {
    const user = await Admin.findById(userId);
    const refreshToken = user.generateRefreshToken();
    const accessToken = user.generateAccessToken();
    await user.hashRefreshToken(refreshToken);
    user.save({ validateBeforeSave: false });
    return { refreshToken, accessToken };
  } catch (error) {
    console.log("Error While Generating the Tokens", error);
    throw new APIERR(500, "internal server error while generating tokens.");
  }
};

const signUp = asyncHandler(async (req, res) => {
  const { fullName, email, mobileNumber, profilePhoto, password } = req.body;
  if (
    [fullName, email, mobileNumber, profilePhoto, password].some(
      (fields) => !fields || fields.trim() === ""
    )
  ) {
    return new APIERR(400, "All fields are required and must not be empty.");
  }

  const existingAdmin = await Admin.findOne({ email: email.trim() });
  if (existingAdmin)
    throw new APIERR(409, "Admin with this email already exists.");

  const createAdmin = await Admin.create({
    fullName,
    email,
    mobileNumber,
    profilePhoto,
    password,
    refreshToken,
  });

  const findCreatedAdmin = await Admin.findById(createAdmin._id).select(
    "-password -refreshToken"
  );

  const refreshToken = findCreatedAdmin.generateRefreshAndAccessToken(
    createAdmin._id
  );
  const accessToken = findCreatedAdmin.generateRefreshAndAccessToken(
    createAdmin._id
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
    maxAge: 15 * 60 * 1000, // 15 minutes
  });

  res
    .status(201)
    .json(new APIRES(201, createAdmin, "Admin created successfully."));
});

const login = asyncHandler(async (req, res) => {});

const logout = asyncHandler(async (req, res) => {});

export { signUp };
