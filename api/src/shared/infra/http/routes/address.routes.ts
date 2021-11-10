import { Router } from "express";
import {CreateUsersAddressController} from "../../../../modules/address/controllers/CreateUsersAddressController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";

const addressRoutes = Router();
const createUsersAddressController = new CreateUsersAddressController();

addressRoutes.post("/", ensureAuthenticated, createUsersAddressController.handle);

export { addressRoutes };