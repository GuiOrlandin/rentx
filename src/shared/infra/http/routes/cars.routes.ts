import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

export const carsRoute = Router();

let createCarController = new CreateCarController();

carsRoute.post(
  "/",
  ensureAuthenticate,
  ensureAdmin,
  createCarController.handle
);
