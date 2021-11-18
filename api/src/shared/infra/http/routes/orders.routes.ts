import {Router} from "express";
import {CreateOrderController} from "../../../../modules/orders/controllers/CreateOrderController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {GetAllOrdersController} from "../../../../modules/orders/controllers/GetAllOrdersController";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {GetOrderController} from "../../../../modules/orders/controllers/GetOrderController";
import {GetAllOrdersByUserController} from "../../../../modules/orders/controllers/GetAllOrdersByUserController";

const ordersRoutes = Router();
const createOrderController = new CreateOrderController();
const getAllOrdersController = new GetAllOrdersController();
const getOrderController = new GetOrderController();
const getAllOrdersByUserController = new GetAllOrdersByUserController();

ordersRoutes.post("/", ensureAuthenticated, createOrderController.handle);
ordersRoutes.get("/", ensureAuthenticated, ensureAdmin, getAllOrdersController.handle);
ordersRoutes.get("/:id", ensureAuthenticated, ensureAdmin, getOrderController.handle);
ordersRoutes.get("/1/user", ensureAuthenticated, getAllOrdersByUserController.handle);

export { ordersRoutes };