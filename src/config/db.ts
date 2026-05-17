import mongoose from "mongoose";
import { env } from "./env";
//
export const connectDB = async (): Promise<void> => {
  try {
    const connection = await mongoose.connect(env.MONGO_URI);
    console.log(
      `data based connected successfully...${connection.connection.host}`,
    );
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
    //  why this process.exit ?
    //  bcz if no DB , app should not run.
    //  what happen?
    // API's will fail
    // random crashes or inconsistance behaviour you will see
  }
};
