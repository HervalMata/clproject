import { Router } from "express";
import {CreateUserController} from "../../../../modules/users/controllers/CreateUserController";
import {GetAllUsersController} from "../../../../modules/users/controllers/GetAllUsersController";
import {GetUserController} from "../../../../modules/users/controllers/GetUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const getUserController = new GetUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", getAllUsersController.handle);
usersRoutes.get("/:id", getUserController.handle);

export { usersRoutes };