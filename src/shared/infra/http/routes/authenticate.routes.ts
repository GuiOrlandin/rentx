import { AuthenticateUserController } from "@modules/accounts/UseCases/AuthenticateUser/AuthenticateUserContoller";
import { RefreshTokenController } from "@modules/accounts/UseCases/refreshToken/RefreshTokenController";
import { Router } from "express";

export const authenticateRoutes = Router();

const authenticateUseController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post("/sessions", authenticateUseController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);
