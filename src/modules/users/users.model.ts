import mongoose, { Schema } from "mongoose";

import { IUser } from "./users.interface";

import { UserRole, UserStatus } from "./users.types";

const customFieldSchema = new Schema(
  {
    key: {
      type: String,

      required: true,
    },

    value: {
      type: String,

      required: true,
    },
  },

  {
    _id: false,
  },
);

const userSchema = new Schema<IUser>(
  {
    employeeId: {
      type: String,

      required: true,

      unique: true,

      trim: true,
    },

    name: {
      type: String,

      required: true,

      trim: true,
    },

    email: {
      type: String,

      required: true,

      unique: true,

      lowercase: true,

      trim: true,
    },

    password: {
      type: String,

      required: true,
    },

    location: {
      type: String,

      required: true,
    },

    department: {
      type: String,

      required: true,
    },

    joinDate: {
      type: Date,

      required: true,
    },

    role: {
      type: String,

      enum: Object.values(UserRole),

      default: UserRole.EMPLOYEE,
    },

    status: {
      type: String,

      enum: Object.values(UserStatus),

      default: UserStatus.PENDING,
    },

    manager: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "User",
    },

    customFields: [customFieldSchema],
  },

  {
    timestamps: true,
  },
);

export const UserModel = mongoose.model<IUser>("User", userSchema);
// =-------------------------------------------
// timestamps: true

// This will automatically creates:
// createdAt
// updatedAt

// ------------------------
// This is MongoDB relationship handling.
