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

// Update user validator
export const updateUserValidator = Joi.object({
  employeeId: Joi.string().optional(),

  name: Joi.string().optional(),

  email: Joi.string().email().optional(),

  password: Joi.string().min(6).optional(),

  location: Joi.string().optional(),

  department: Joi.string().optional(),

  joinDate: Joi.date().optional(),

  role: Joi.string()
    .valid(...Object.values(UserRole))
    .optional(),

  status: Joi.string()
    .valid(...Object.values(UserStatus))
    .optional(),
})
  .min(1)
  .unknown(false);
