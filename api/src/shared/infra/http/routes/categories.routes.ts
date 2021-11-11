import { Router } from "express";
import {CreateCategoryController} from "../../../../modules/categories/controllers/CreateCategoryController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdminOrSeller} from "../middlewares/ensureAdminOrSeller";
import {GetAllCategoriesController} from "../../../../modules/categories/controllers/GetAllCategoriesController";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const getAllCategoriesController = new GetAllCategoriesController();

categoriesRoutes.post("/", ensureAuthenticated, ensureAdminOrSeller, createCategoryController.handle);
categoriesRoutes.get("/", ensureAuthenticated, ensureAdminOrSeller, getAllCategoriesController.handle);

export { categoriesRoutes };