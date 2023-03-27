import { CreateRentalController } from "@modules/rentals/useCase/createRentals/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/useCase/devolutionRental/DevolutionRentalController";
import { ListRentalsByUserController } from "@modules/rentals/useCase/listRentalsByUser/ListRentalsByUserController";
import { Router } from "express";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

export const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

rentalRoutes.post("/", ensureAuthenticate, createRentalController.handle);
rentalRoutes.get(
  "/devolution/:id",
  ensureAuthenticate,
  devolutionRentalController.handle
);

rentalRoutes.get(
  "/user",
  ensureAuthenticate,
  listRentalsByUserController.handle
);
