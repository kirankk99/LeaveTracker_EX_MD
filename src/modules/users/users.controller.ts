import { Request, Response } from "express";

import { createUserService } from "./users.service";

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

// IMPORTANT Concept

// Controller should ONLY:

// validate request
// call service
// return response

// NO heavy business logic.
