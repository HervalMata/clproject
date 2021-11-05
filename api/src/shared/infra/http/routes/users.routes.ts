import { Router } from "express";
import {CreateUserController} from "../../../../modules/users/controllers/CreateUserController";
import {GetAllUsersController} from "../../../../modules/users/controllers/GetAllUsersController";
import {GetUserController} from "../../../../modules/users/controllers/GetUserController";
import {UpdateAdminUserController} from "../../../../modules/users/controllers/UpdateAdminUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const getUserController = new GetUserController();
const updateAdminUserController = new UpdateAdminUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", getAllUsersController.handle);
usersRoutes.get("/:id", getUserController.handle);
usersRoutes.patch("/:id", updateAdminUserController.handle);

export { usersRoutes };