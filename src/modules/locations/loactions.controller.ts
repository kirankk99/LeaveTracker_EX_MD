import { sendResponse } from "../../core/utils/responseHrlper";
import {
  createLocationService,
  getLocationsService,
} from "./locations.service";
import { Request, Response } from "express";
import { createLocationValidator } from "./locations.validators";

// Create controller for the locations

export const createLocationController = async (req: Request, res: Response) => {
  try {
    const { error, value } = createLocationValidator.validate(req.body);
    if (error) {
      sendResponse(
        value,
        400,
        false,
        "Entered Location not correct" + error.details[0].message,
      );
      throw error;
    } else {
      const location = await createLocationService(value);
      sendResponse(location, 201, true, "Location created successfully");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getLocationsController = async (req: Request, res: Response) => {
  try {
    const users = await getLocationsService();

    sendResponse(users, 201, true, "Users fetched successfully");
  } catch (error: any) {
    console.error(error);
    sendResponse(error, 500, true, "Internal server error");
  }
};
