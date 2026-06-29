import express from "express";
import cookieParser from "cookie-parser";

// basic to importing user module--------------------------------------------
// import { UserModel } from "./modules/users/users.model";
// removed and logic moved to users.route.ts file -----------------------------
import userRoutes from "./modules/users/users.route";
import locationRoutes from "./modules/locations/locations.rute";
import { notFoundHandler } from "./core/middleware/notfound.middleware";
import { errorHandler } from "./core/middleware/error.middleware";

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
// not found
app.use(notFoundHandler);

// error handler
app.use(errorHandler);
// register the locations rutes
app.use("/api/locations", locationRoutes);
export default app;
