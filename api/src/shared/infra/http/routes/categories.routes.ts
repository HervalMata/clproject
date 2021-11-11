import { Router } from "express";
import {CreateCategoryController} from "../../../../modules/categories/controllers/CreateCategoryController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdminOrSeller} from "../middlewares/ensureAdminOrSeller";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", ensureAuthenticated, ensureAdminOrSeller, createCategoryController.handle);

export { categoriesRoutes };