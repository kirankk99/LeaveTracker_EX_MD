import { Schema, model } from "mongoose";

import { ILocation } from "./locations.interface";

import { LocationSource } from "./locations.types";

const locationSchema = new Schema<ILocation>(
  {
    country: {
      type: String,
      required: true,
      trim: true,
    },

    state: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    source: {
      type: String,
      enum: Object.values(LocationSource),
      default: LocationSource.SYSTEM,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },

  {
    timestamps: true,
  },
);

locationSchema.index(
  {
    country: 1,
    state: 1,
    city: 1,
  },
  {
    unique: true,
  },
);
export const LocationModel = model<ILocation>("Location", locationSchema);
