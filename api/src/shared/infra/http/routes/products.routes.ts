import { Router } from "express";
import {CreateProductController} from "../../../../modules/products/controllers/CreateProductController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdminOrSeller} from "../middlewares/ensureAdminOrSeller";

const productsRoutes = Router();
const createProductController = new CreateProductController();

productsRoutes.post("/", ensureAuthenticated, ensureAdminOrSeller, createProductController.handle);

export { productsRoutes };