import Joi from "joi";

export const createLocationValidator = Joi.object({
  country: Joi.string().required(),

  state: Joi.string().required(),

  city: Joi.string().required(),
}).unknown(false);
