import { Router } from "express";
import {CreateUsersAddressController} from "../../../../modules/address/controllers/CreateUsersAddressController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {GetUsersAddressController} from "../../../../modules/address/controllers/GetUsersAddressController";

const addressRoutes = Router();
const createUsersAddressController = new CreateUsersAddressController();
const getUsersAddressController = new GetUsersAddressController();

addressRoutes.post("/", ensureAuthenticated, createUsersAddressController.handle);
addressRoutes.get("/:user_id", ensureAuthenticated, getUsersAddressController.handle);

export { addressRoutes };