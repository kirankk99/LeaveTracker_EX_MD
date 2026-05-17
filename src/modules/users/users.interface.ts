import { Document, Types } from "mongoose";

import { UserRole, UserStatus } from "./users.types";

export interface IUserCustomFieldValue {
  fieldKey: string;
  type: string;
  value: unknown;
}
export interface IUser extends Document {
  employeeId: string;

  name: string;

  email: string;

  password: string;

  location: string;

  department: string;

  joinDate: Date;

  role: UserRole;

  status: UserStatus;

  manager?: Types.ObjectId;
  // User references another User

  customFields?: IUserCustomFieldValue[];

  createdAt: Date;

  updatedAt: Date;
}
