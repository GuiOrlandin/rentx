import { AuthenticateUserController } from "@modules/accounts/UseCases/AuthenticateUser/AuthenticateUserContoller";
import { Router } from "express";

export const authenticateRoutes = Router();

export const authenticateUseController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUseController.handle);
