import { Router } from "express";
import {CreateColorController} from "../../../../modules/colors/controllers/CreateColorController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {GetAllCategoriesController} from "../../../../modules/categories/controllers/GetAllCategoriesController";
import {GetColorController} from "../../../../modules/colors/controllers/GetColorController";

const colorsRoutes = Router();
const createColorController = new CreateColorController();
const getAllColorsController = new GetAllCategoriesController();
const getColorController = new GetColorController();

colorsRoutes.post("/", ensureAuthenticated, ensureAdmin, createColorController.handle);
colorsRoutes.get("/", ensureAuthenticated, ensureAdmin, getAllColorsController.handle);
colorsRoutes.get("/:id", ensureAuthenticated, ensureAdmin, getColorController.handle);

export { colorsRoutes };