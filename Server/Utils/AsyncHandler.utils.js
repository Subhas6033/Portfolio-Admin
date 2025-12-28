export const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req, res, next);
  } catch (error) {
    console.log("Error from the AsyncHandler", error);
    const status = error?.status || 50;
    const message = error?.message || "Something Went Wrong";
    return res.status(status).json({ success: false, message });
  }
};
