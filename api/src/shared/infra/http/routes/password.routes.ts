import { Router } from "express";
import {ResetPasswordUserController} from "../../../../modules/users/controllers/ResetPasswordUserController";
import {SendForgotPasswordUserController} from "../../../../modules/users/controllers/SendForgotPasswordUserController";

const passwordRoutes = Router();

const resetPasswordUserController = new ResetPasswordUserController();
const sendForgotPasswordUserController = new SendForgotPasswordUserController();

passwordRoutes.post("/reset", resetPasswordUserController.handle);
passwordRoutes.post("/forgot", sendForgotPasswordUserController.handle);

export { passwordRoutes };