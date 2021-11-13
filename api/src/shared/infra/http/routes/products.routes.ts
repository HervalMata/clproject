import { Router } from "express";
import {CreateProductController} from "../../../../modules/products/controllers/CreateProductController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdminOrSeller} from "../middlewares/ensureAdminOrSeller";
import {GetAllProductsController} from "../../../../modules/products/controllers/GetAllProductsController";
import {GetProductController} from "../../../../modules/products/controllers/GetProductController";

const productsRoutes = Router();
const createProductController = new CreateProductController();
const getAllProductsController = new GetAllProductsController();
const getProductController = new GetProductController();

productsRoutes.post("/", ensureAuthenticated, ensureAdminOrSeller, createProductController.handle);
productsRoutes.get("/", ensureAuthenticated, ensureAdminOrSeller, getAllProductsController.handle);
productsRoutes.get("/:id", getProductController.handle);

export { productsRoutes };