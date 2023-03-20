import { CreateRentalController } from "@modules/rentals/useCase/createRentals/CreateRentalController";
import { Router } from "express";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

export const rentalRoutes = Router();

const createRentalController = new CreateRentalController();

rentalRoutes.post("/", ensureAuthenticate, createRentalController.handle);
