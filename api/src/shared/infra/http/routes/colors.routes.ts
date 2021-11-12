import { Router } from "express";
import {CreateColorController} from "../../../../modules/colors/controllers/CreateColorController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {GetAllCategoriesController} from "../../../../modules/categories/controllers/GetAllCategoriesController";

const colorsRoutes = Router();
const createColorController = new CreateColorController();
const getAllColorsController = new GetAllCategoriesController();

colorsRoutes.post("/", ensureAuthenticated, ensureAdmin, createColorController.handle);
colorsRoutes.get("/", ensureAuthenticated, ensureAdmin, getAllColorsController.handle);

export { colorsRoutes };