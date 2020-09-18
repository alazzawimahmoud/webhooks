import * as Joi from "joi";

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid("development", "production", "test").required(),
  API_PORT: Joi.number().default(3000),
  FRONT_PORT: Joi.number().default(3000),
  REDIS_PORT:Joi.number().required(),
  POSTGRES_PORT:Joi.number().required(),
  POSTGRES_DB:Joi.string().required(),
  POSTGRES_USER:Joi.string().required(),
  POSTGRES_PASSWORD:Joi.string().required(),  
});
