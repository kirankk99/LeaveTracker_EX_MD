import { Router } from "express";
import { createUserController } from "./users.controller";
// init router
const router = Router();

router.post("/create-user", createUserController);
export default router;
