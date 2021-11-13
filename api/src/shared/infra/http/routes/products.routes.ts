import { Router } from "express";
import {CreateProductController} from "../../../../modules/products/controllers/CreateProductController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdminOrSeller} from "../middlewares/ensureAdminOrSeller";
import {GetAllProductsController} from "../../../../modules/products/controllers/GetAllProductsController";
import {GetProductController} from "../../../../modules/products/controllers/GetProductController";
import {GetAvailableProductsController} from "../../../../modules/products/controllers/GetAvailableProductsController";

const productsRoutes = Router();
const createProductController = new CreateProductController();
const getAllProductsController = new GetAllProductsController();
const getProductController = new GetProductController();
const getAvailableProductsController = new GetAvailableProductsController();

productsRoutes.post("/", ensureAuthenticated, ensureAdminOrSeller, createProductController.handle);
productsRoutes.get("/", ensureAuthenticated, ensureAdminOrSeller, getAllProductsController.handle);
productsRoutes.get("/:id", getProductController.handle);
productsRoutes.get("/available", getAvailableProductsController.handle);

export { productsRoutes };