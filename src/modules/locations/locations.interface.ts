import { Document } from "mongoose";

import { LocationSource } from "./locations.types";

export interface ILocation extends Document {
  country: string;

  state: string;

  city: string;

  source: LocationSource;

  isActive: boolean;

  createdAt: Date;

  updatedAt: Date;
}
