// TODO: Update this Controller with respective Models and Logic
/* import { asyncHandler, APIERR, APIRES } from "../Utils/index.utils.js";
import { Admin } from "../Models/Admin.models.js";

const getResumeUrl = asyncHandler(async (req, res) => {
  const resumeUrl = await Admin.findOne({ resumeUrl: { $exists: true } });
  if (!resumeUrl) throw new APIERR(404, "Resume URL not Found");

  res
    .status(200)
    .json(new APIRES(200, "Resume URL fetched successfully", resumeUrl));
});

export { getResumeUrl };
 */
