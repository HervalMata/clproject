import { Router } from "express";
import {ResetPasswordUserController} from "../../../../modules/users/controllers/ResetPasswordUserController";

const passwordRoutes = Router();

const resetPasswordUserController = new ResetPasswordUserController();

passwordRoutes.post("/reset", resetPasswordUserController.handle);

export { passwordRoutes };