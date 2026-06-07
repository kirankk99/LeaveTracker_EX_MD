import { Request, Response } from "express";

import {
  createUserService,
  deactivateUserService,
  getUserByIdService,
  getUsersService,
  getUsersServiceByDept,
  updateUserService,
} from "./users.service";

import { createUserValidator, updateUserValidator } from "./users.validator";
import mongoose from "mongoose";

//

export const createUserController = async (req: Request, res: Response) => {
  {
    try {
      const { error, value } = createUserValidator.validate(req?.body);

      if (error) {
        return res.status(400).json({
          success: false,
          message: "Validation Error" + error.details[0].message,
          code: 400,
        });
      } else {
        const user = await createUserService(value);
        res.status(201).json({
          success: true,
          data: user,
          message: "Action compted successfully",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,

        message: "Internal server error",
      });
    }
  }
};
// ======================================
// get users data from the list
export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();

    res.status(200).json({
      success: true,
      data: users,
      message: "Users fetched successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// get user based on the department passed
export const getUsersByDept = async (req: Request, res: Response) => {
  try {
    console.log(req.query);
    const { deptName, role }: any = req?.query;
    const users = await getUsersServiceByDept(deptName, role);

    res.status(200).json({
      success: true,
      data: users,
      message: "Users fetched successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: `Internal error, ${error}`,
    });
  }
};
//  get the user based on the Id
export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const id = req.params?.id as string;

    const user = await getUserByIdService(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
// IMPORTANT Concept

// Controller should ONLY:

// validate request
// call service
// return response

// NO heavy business logic.

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { error, value } = updateUserValidator.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    } else {
      const updatedUser = await updateUserService(id, value);

      if (!updatedUser) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      res.status(200).json({
        success: true,
        data: updatedUser,
        message: "User updated successfully",
      });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
//
//
// De activate the user

export const deactivateUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params?.id as string;
    console.log(id, "id");
    if (!mongoose.Types.ObjectId?.isValid(id)) {
      return res.status(400).json({
        success: false,
        Message: "Invalid Id / User Id not found",
      });
    }
    //
    const user = await deactivateUserService(id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      data: user,
      message: "User deactivated successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Internal Server Error ==>" + err,
    });
  }
};
