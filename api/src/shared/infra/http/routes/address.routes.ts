import { Router } from "express";
import {CreateUsersAddressController} from "../../../../modules/address/controllers/CreateUsersAddressController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {GetUsersAddressController} from "../../../../modules/address/controllers/GetUsersAddressController";
import {UpdateUsersAddressController} from "../../../../modules/address/controllers/UpdateUsersAddressController";

const addressRoutes = Router();
const createUsersAddressController = new CreateUsersAddressController();
const getUsersAddressController = new GetUsersAddressController();
const updateUsersAddressController = new UpdateUsersAddressController();

addressRoutes.post("/", ensureAuthenticated, createUsersAddressController.handle);
addressRoutes.get("/:user_id", ensureAuthenticated, getUsersAddressController.handle);
addressRoutes.put("/:id", ensureAuthenticated, updateUsersAddressController.handle);

export { addressRoutes };