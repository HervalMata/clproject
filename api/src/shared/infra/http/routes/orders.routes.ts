import {Router} from "express";
import {CreateOrderController} from "../../../../modules/orders/controllers/CreateOrderController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";

const ordersRoutes = Router();
const createOrderController = new CreateOrderController();

ordersRoutes.post("/", ensureAuthenticated, createOrderController.handle);

export { ordersRoutes };