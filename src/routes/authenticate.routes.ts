import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/UseCases/AuthenticateUser/AuthenticateUserContoller";

export const authenticateRoutes = Router();

export const authenticateUseController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUseController.handle);
