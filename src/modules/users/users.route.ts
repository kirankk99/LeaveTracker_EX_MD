import { Router } from "express";
import {
  createUserController,
  deactivateUserController,
  getUserByIdController,
  getUsersByDept,
  getUsersController,
  updateUserController,
} from "./users.controller";
// init router
const router = Router();

router.post("/", createUserController);
router.get("/", getUsersController);
router.get("/by-department", getUsersByDept);
router.patch("/:id/deactivate", deactivateUserController);
router.get("/:id", getUserByIdController);
// to update the user data
router.put("/:id", updateUserController);
// soft delete the user
export default router;
//
// POST /api/users
// GET /api/users
// GET /api/users/by-department
