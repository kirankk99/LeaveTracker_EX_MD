import { Router } from "express";
import {
  createLocationController,
  getLocationsController,
} from "./loactions.controller";

const locRouter = Router();

locRouter.post("/create-location", createLocationController);

locRouter.get("/get-locations", getLocationsController);

export default locRouter;
