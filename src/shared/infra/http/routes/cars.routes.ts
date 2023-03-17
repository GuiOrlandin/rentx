import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

export const carsRoute = Router();

let createCarController = new CreateCarController();
let listAvailableCarsController = new ListAvailableCarsController();

carsRoute.post(
  "/",
  ensureAuthenticate,
  ensureAdmin,
  createCarController.handle
);

carsRoute.get("/available", listAvailableCarsController.handle);
