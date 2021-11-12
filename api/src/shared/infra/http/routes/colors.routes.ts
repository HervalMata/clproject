import { Router } from "express";
import {CreateColorController} from "../../../../modules/colors/controllers/CreateColorController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {GetColorController} from "../../../../modules/colors/controllers/GetColorController";
import { GetAllColorsController } from "../../../../modules/colors/controllers/GetAllColorsController";

const colorsRoutes = Router();
const createColorController = new CreateColorController();
const getAllColorsController = new GetAllColorsController();
const getColorController = new GetColorController();

colorsRoutes.post("/", ensureAuthenticated, ensureAdmin, createColorController.handle);
colorsRoutes.get("/", ensureAuthenticated, ensureAdmin, getAllColorsController.handle);
colorsRoutes.get("/:id", ensureAuthenticated, ensureAdmin, getColorController.handle);

export { colorsRoutes };