import { IUser } from "./users.interface";
import { UserModel } from "./users.model";

//
export const createUserService = async (payload: Partial<IUser>) => {
  const user = await UserModel.create(payload);
  return user;
};

// Why Service Layer?

// Business logic belongs here.

// Later:

// password hashing
// duplicate checks
// email sending
// workflow assignment

// all happen inside services.
