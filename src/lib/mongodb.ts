import mongoose from "mongoose";

const connectDB = async () => {
  const MONGODB = process.env.MONGODB_URI;

  if (!MONGODB) {
    throw new Error("Please define the MONGODB_URI environment variable");
  }

  try {
    await mongoose.connect(MONGODB);
    console.log("MongoDB connected successfully");
  } catch (error) {
    throw new Error(`Connection failed! > ${error}`);
  }
};

export default connectDB;
