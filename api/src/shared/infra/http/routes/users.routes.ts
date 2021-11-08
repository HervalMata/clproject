import { Router } from "express";
import {CreateUserController} from "../../../../modules/users/controllers/CreateUserController";
import {GetAllUsersController} from "../../../../modules/users/controllers/GetAllUsersController";
import {GetUserController} from "../../../../modules/users/controllers/GetUserController";
import {UpdateAdminUserController} from "../../../../modules/users/controllers/UpdateAdminUserController";
import {UpdateSellerUserController} from "../../../../modules/users/controllers/UpdateSellerUserController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {CreateUsersProfileController} from "../../../../modules/users/controllers/CreateUsersProfileController";
import multer from "multer";
import uploadConfig from '../../../../config/upload';
import {GetUsersProfileController} from "../../../../modules/users/controllers/GetUsersProfileController";
import {UpdateUsersProfileController} from "../../../../modules/users/controllers/UpdateUsersProfileController";

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const getUserController = new GetUserController();
const updateAdminUserController = new UpdateAdminUserController();
const updateSellerUserController = new UpdateSellerUserController();
const createUsersProfileController = new CreateUsersProfileController();
const getUsersProfileController = new GetUsersProfileController();
const updateUsersProfileController = new UpdateUsersProfileController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", ensureAuthenticated, ensureAdmin, getAllUsersController.handle);
usersRoutes.get("/:id", ensureAuthenticated, getUserController.handle);
usersRoutes.patch("/:id", ensureAuthenticated, ensureAdmin, updateAdminUserController.handle);
usersRoutes.patch("/:id", ensureAuthenticated, ensureAdmin, updateSellerUserController.handle);
usersRoutes.post("/profile", ensureAuthenticated, uploadAvatar.single("avatar"), createUsersProfileController.handle);
usersRoutes.get("/profile/:user_id", ensureAuthenticated, getUsersProfileController.handle);
usersRoutes.patch("/profile/:id", ensureAuthenticated, uploadAvatar.single("avatar"), updateUsersProfileController.handle);

export { usersRoutes };