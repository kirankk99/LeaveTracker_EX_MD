import app from "./app";
import { env } from "./config/env";
import { connectDB } from "./config/db";

//
const startServer = async (): Promise<void> => {
  try {
    await connectDB();
    //
    app.listen(env.PORT, () => {
      console.log(`Server running on http://localhost:${env.PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    //
    process.exit(1);
  }
};

//
startServer();
//
//
// DB must connect BEFORE app starts
