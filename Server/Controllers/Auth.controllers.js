import { asyncHandler, APIERR, APIRES } from "../Utils/index.utils.js";
import { Admin } from "../Models/Admin.models.js";

const generateRefreshAndAccessToken = async (userId) => {
  try {
    const user = await Admin.findById(userId);
    const refreshToken = user.generateRefreshToken();
    const accessToken = user.generateAccessToken();
    await user.hashRefreshToken(refreshToken);
    await user.save({ validateBeforeSave: false });
    return { refreshToken, accessToken };
  } catch (error) {
    console.log("Error While Generating the Tokens", error);
    throw new APIERR(500, "internal server error while generating tokens.");
  }
};

const signUp = asyncHandler(async (req, res) => {
  const { fullName, email, mobileNumber, password } = req.body;
  if (
    [fullName, email, mobileNumber, password].some(
      (fields) => !fields || fields.trim() === ""
    )
  ) {
    throw new APIERR(400, "All fields are required and must not be empty.");
  }

  const existingAdmin = await Admin.findOne({ email: email.trim() });
  if (existingAdmin)
    throw new APIERR(409, "Admin with this email already exists.");

  const createAdmin = await Admin.create({
    fullName,
    email,
    mobileNumber,
    password,
  });

  await Admin.findById(createAdmin._id).select("-password -refreshToken");

  const { refreshToken, accessToken } = await generateRefreshAndAccessToken(
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

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if ([email, password].some((f) => !f || f.trim() === ""))
    throw new APIERR(404, "Please provide valid credentials to login.");

  const isAdminExists = await Admin.findOne({ email });
  if (!isAdminExists) throw new APIERR(404, "Admin not found with this email.");

  const isPasswordCorrect = await isAdminExists.isPasswordCorrect(password);
  if (!isPasswordCorrect) throw new APIERR(401, "Password is incorrect.");

  const { refreshToken, accessToken } = await generateRefreshAndAccessToken(
    isAdminExists._id
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    path: "/",
  });

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
    maxAge: 15 * 60 * 1000, // 15 minutes
    path: "/",
  });

  res.status(200).json(new APIRES(200, "Admin logged in successfully."));
});

const logout = asyncHandler(async (req, res) => {
  // Delete refreshToken from database
  console.log("Logging out user:", req?.user);
  await Admin.findByIdAndUpdate(req.user._id, {
    $unset: { refreshToken: 1 },
  });

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
    path: "/",
  });

  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
    path: "/",
  });

  res.status(200).json(new APIRES(200, "Admin logged out successfully."));
});

export { signUp, login, logout };
