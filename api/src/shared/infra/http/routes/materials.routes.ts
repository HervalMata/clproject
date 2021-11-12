import { Router } from "express";
import {CreateMaterialController} from "../../../../modules/materials/controllers/CreateMaterialController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";

const materialsRoutes = Router();
const createMaterialController = new CreateMaterialController();

materialsRoutes.post("/", ensureAuthenticated, ensureAdmin, createMaterialController.handle);

export { materialsRoutes };