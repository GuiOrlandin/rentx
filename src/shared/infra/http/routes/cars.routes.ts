import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { Router } from "express";

export const carsRoute = Router();

let createCarController = new CreateCarController();

carsRoute.post("/", createCarController.handle);
