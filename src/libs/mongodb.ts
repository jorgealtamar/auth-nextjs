import mongoose from "mongoose";

const MONGO_URL = process.env.DB_URL as string;

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};