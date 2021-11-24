import {Router} from "express";
import {CreateTypesDeliveryController} from "../../../../modules/deliveries/controllers/CreateTypesDeliveryController";
import {GetAllTypesDeliveryController} from "../../../../modules/deliveries/controllers/GetAllTypesDeliveryController";
import {GetTypesDeliveryController} from "../../../../modules/deliveries/controllers/GetTypesDeliveryController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {CreateStatusDeliveryController} from "../../../../modules/deliveries/controllers/CreateStatusDeliveryController";
import {GetAllStatusDeliveryController} from "../../../../modules/deliveries/controllers/GetAllStatusDeliveryController";
import {GetStatusDeliveryController} from "../../../../modules/deliveries/controllers/GetStatusDeliveryController";
import {GetAllDeliveriesController} from "../../../../modules/deliveries/controllers/GetAllDeliveriesController";
import {GetDeliveryController} from "../../../../modules/deliveries/controllers/GetDeliveryController";
import {UpdateStatusDeliveryController} from "../../../../modules/deliveries/controllers/UpdateStatusDeliveryController";

const deliveriesRoutes = Router();
const createTypesDeliveryController = new CreateTypesDeliveryController();
const getAllTypesDeliveryController = new GetAllTypesDeliveryController();
const getTypesDeliveryController = new GetTypesDeliveryController();
const createStatusDeliveryController = new CreateStatusDeliveryController();
const getAllStatusDeliveryController = new GetAllStatusDeliveryController();
const getStatusDeliveryController = new GetStatusDeliveryController();
const getAllDeliveriesController = new GetAllDeliveriesController();
const getDeliveryController = new GetDeliveryController();
const updateStatusDeliveryController = new UpdateStatusDeliveryController();

deliveriesRoutes.post("/types", ensureAuthenticated, ensureAdmin, createTypesDeliveryController.handle);
deliveriesRoutes.post("/status", ensureAuthenticated, ensureAdmin, createStatusDeliveryController.handle);
deliveriesRoutes.get("/types", getAllTypesDeliveryController.handle);
deliveriesRoutes.get("/status", getAllStatusDeliveryController.handle);
deliveriesRoutes.get("/:id/types", getTypesDeliveryController.handle);
deliveriesRoutes.get("/:id/status", getStatusDeliveryController.handle);
deliveriesRoutes.get("/", ensureAuthenticated, ensureAdmin, getAllDeliveriesController.handle);
deliveriesRoutes.get("/:id", ensureAuthenticated, ensureAdmin, getDeliveryController.handle);
deliveriesRoutes.patch("/:id", ensureAuthenticated, ensureAdmin, updateStatusDeliveryController.handle);

export {deliveriesRoutes};