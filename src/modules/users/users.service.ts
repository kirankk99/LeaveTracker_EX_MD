import { IUser } from "./users.interface";
import { UserModel } from "./users.model";

//
export const createUserService = async (payload: Partial<IUser>) => {
  const user = await UserModel.create(payload);
  return user;
};

export const getUsersService = async () => {
  const users = await UserModel.find();

  return users;
};
export const getUsersServiceByDept = async (dept: string, role: string) => {
  const filter: Record<string, string> = {};

  if (dept) {
    filter.department = dept;
  }

  if (role) {
    filter.role = role;
  }

  const users = await UserModel.find(filter);
  return users;
};

export const getUserByIdService = async (id: string) => {
  const user = await UserModel.findById(id);

  return user;
};

// ==================
// ==================
// ==================

// Why Service Layer?

// Business logic belongs here.

// Later:

// password hashing
// duplicate checks
// email sending
// workflow assignment

// all happen inside services.
// ==================================================================
// ============================
// There are basic 4 method we use commonly in fetching the data from table
// find()
// findOne()
// findById()
// countDocuments()
