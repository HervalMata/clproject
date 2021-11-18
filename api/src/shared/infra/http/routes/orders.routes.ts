import {Router} from "express";
import {CreateOrderController} from "../../../../modules/orders/controllers/CreateOrderController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {GetAllOrdersController} from "../../../../modules/orders/controllers/GetAllOrdersController";
import {ensureAdmin} from "../middlewares/ensureAdmin";

const ordersRoutes = Router();
const createOrderController = new CreateOrderController();
const getAllOrdersController = new GetAllOrdersController();

ordersRoutes.post("/", ensureAuthenticated, createOrderController.handle);
ordersRoutes.get("/", ensureAuthenticated, ensureAdmin, getAllOrdersController.handle);

export { ordersRoutes };