import { ILocation } from "./locations.interface";
import { LocationModel } from "./locations.model";

// to create a loction inside the DB
export const createLocationService = async (payload: Partial<ILocation>) => {
  const location = await LocationModel.create(payload);

  return location;
};
//
// get the loctions from the DB
export const getLocationsService = async () => {
  return await LocationModel.find({
    isActive: true,
  });
};

//
//
