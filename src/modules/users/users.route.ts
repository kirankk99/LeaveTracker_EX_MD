import { Router } from "express";
import {
  createUserController,
  getUserByIdController,
  getUsersByDept,
  getUsersController,
} from "./users.controller";
// init router
const router = Router();

router.post("/", createUserController);
router.get("/", getUsersController);
router.get("/by-department", getUsersByDept);
router.get("/:id", getUserByIdController);
export default router;
//
// POST /api/users
// GET /api/users
// GET /api/users/by-department
