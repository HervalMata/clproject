import { Router } from "express";
import {CreateProductController} from "../../../../modules/products/controllers/CreateProductController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdminOrSeller} from "../middlewares/ensureAdminOrSeller";
import {GetAllProductsController} from "../../../../modules/products/controllers/GetAllProductsController";

const productsRoutes = Router();
const createProductController = new CreateProductController();
const getAllProductsController = new GetAllProductsController();

productsRoutes.post("/", ensureAuthenticated, ensureAdminOrSeller, createProductController.handle);
productsRoutes.get("/", ensureAuthenticated, ensureAdminOrSeller, getAllProductsController.handle);

export { productsRoutes };