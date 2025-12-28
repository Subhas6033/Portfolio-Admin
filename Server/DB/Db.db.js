import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    console.log("Successfully Connected to the DB!");
  } catch (error) {
    console.log(`Error While Connecting to the DB! ${error}`);
    process.exit(1);
  }
};
