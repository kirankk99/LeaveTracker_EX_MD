import { Request, Response } from "express";

import {
  createUserService,
  getUserByIdService,
  getUsersService,
  getUsersServiceByDept,
} from "./users.service";

import { createUserValidator } from "./users.validator";

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
