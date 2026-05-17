import Joi from "joi";

import { UserRole, UserStatus } from "./users.types";

export const createUserValidator = Joi.object({
  employeeId: Joi.string().required(),

  name: Joi.string().required(),

  email: Joi.string().email().required(),

  password: Joi.string().min(6).required(),

  location: Joi.string().required(),

  department: Joi.string().required(),

  joinDate: Joi.date().required(),

  role: Joi.string()
    .valid(...Object.values(UserRole))
    .optional(),

  status: Joi.string()
    .valid(...Object.values(UserStatus))
    .optional(),
});
