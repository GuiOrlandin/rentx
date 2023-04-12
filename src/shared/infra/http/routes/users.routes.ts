import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { CreateUserController } from "@modules/accounts/UseCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/UseCases/updateUserAvatar/UpdateUserAvatarController";
import { ProfileUserController } from "@modules/accounts/UseCases/profileUser/ProfileUserController";

export const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const profileUserController = new ProfileUserController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/profile", ensureAuthenticate, profileUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticate,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);
