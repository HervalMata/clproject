import { Router } from "express";
import {CreateCategoryController} from "../../../../modules/categories/controllers/CreateCategoryController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdminOrSeller} from "../middlewares/ensureAdminOrSeller";
import {GetAllCategoriesController} from "../../../../modules/categories/controllers/GetAllCategoriesController";
import {GetAvailableCategoriesController} from "../../../../modules/categories/controllers/GetAvailableCategoriesController";
import {GetCategoryController} from "../../../../modules/categories/controllers/GetCategoryController";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const getAllCategoriesController = new GetAllCategoriesController();
const getAvailableCategoriesController = new GetAvailableCategoriesController();
const getCategoryController = new GetCategoryController();

categoriesRoutes.post("/", ensureAuthenticated, ensureAdminOrSeller, createCategoryController.handle);
categoriesRoutes.get("/", ensureAuthenticated, ensureAdminOrSeller, getAllCategoriesController.handle);
categoriesRoutes.get("/available", getAvailableCategoriesController.handle);
categoriesRoutes.get("/:id", ensureAuthenticated, ensureAdminOrSeller, getCategoryController.handle);

export { categoriesRoutes };