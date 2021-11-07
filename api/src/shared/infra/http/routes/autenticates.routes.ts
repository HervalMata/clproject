import { Router } from "express";
import { AuthenticateUserController } from "../../../../modules/users/controllers/AuthenticateUserController";
import {RefreshTokenUserController} from "../../../../modules/users/controllers/RefreshTokenUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserService = new RefreshTokenUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenUserService.handle);

export { authenticateRoutes };