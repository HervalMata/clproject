import { Router } from "express";
import {CreateColorController} from "../../../../modules/colors/controllers/CreateColorController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";

const colorsRoutes = Router();
const createColorController = new CreateColorController();

colorsRoutes.post("/", ensureAuthenticated, ensureAdmin, createColorController.handle);

export { colorsRoutes };