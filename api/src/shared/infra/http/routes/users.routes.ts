import { Router } from "express";
import {CreateUserController} from "../../../../modules/users/controllers/CreateUserController";
import {GetAllUsersController} from "../../../../modules/users/controllers/GetAllUsersController";
import {GetUserController} from "../../../../modules/users/controllers/GetUserController";
import {UpdateAdminUserController} from "../../../../modules/users/controllers/UpdateAdminUserController";
import {UpdateSellerUserController} from "../../../../modules/users/controllers/UpdateSellerUserController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const getUserController = new GetUserController();
const updateAdminUserController = new UpdateAdminUserController();
const updateSellerUserController = new UpdateSellerUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", ensureAuthenticated, getAllUsersController.handle);
usersRoutes.get("/:id", ensureAuthenticated, getUserController.handle);
usersRoutes.patch("/:id", ensureAuthenticated, updateAdminUserController.handle);
usersRoutes.patch("/:id", ensureAuthenticated, updateSellerUserController.handle);

export { usersRoutes };