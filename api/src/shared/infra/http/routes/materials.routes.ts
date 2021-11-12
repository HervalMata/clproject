import { Router } from "express";
import {CreateMaterialController} from "../../../../modules/materials/controllers/CreateMaterialController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {GetAllMaterialsController} from "../../../../modules/materials/controllers/GetAllMaterialsController";

const materialsRoutes = Router();
const createMaterialController = new CreateMaterialController();
const getAllMaterialsController = new GetAllMaterialsController();

materialsRoutes.post("/", ensureAuthenticated, ensureAdmin, createMaterialController.handle);
materialsRoutes.get("/", ensureAuthenticated, ensureAdmin, getAllMaterialsController.handle);

export { materialsRoutes };