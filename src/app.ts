import express from "express";
import cookieParser from "cookie-parser";

// basic to importing user module--------------------------------------------
// import { UserModel } from "./modules/users/users.model";
// removed and logic moved to users.route.ts file -----------------------------
import userRoutes from "./modules/users/users.route";

//
const app = express();
//

app.use(express.json());
//
app.use(cookieParser());
//
// remove this old testing code
app.get("/", (req, res) => {
  res.send("Leave tracker api running...");
});
// add new usersrouter and register here in app js
app.use("/api/users", userRoutes);

//
export default app;
