import {Router} from "express";
import {CreateOrderController} from "../../../../modules/orders/controllers/CreateOrderController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {GetAllOrdersController} from "../../../../modules/orders/controllers/GetAllOrdersController";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {GetOrderController} from "../../../../modules/orders/controllers/GetOrderController";
import {GetAllOrdersByUserController} from "../../../../modules/orders/controllers/GetAllOrdersByUserController";
import {GetOrderByUserController} from "../../../../modules/orders/controllers/GetOrderByUserController";
import {ApplyCouponController} from "../../../../modules/orders/controllers/ApplyCouponController";
import {UpdateStatusOrderController} from "../../../../modules/orders/controllers/UpdateStatusOrderController";

const ordersRoutes = Router();
const createOrderController = new CreateOrderController();
const getAllOrdersController = new GetAllOrdersController();
const getOrderController = new GetOrderController();
const getAllOrdersByUserController = new GetAllOrdersByUserController();
const getOrderByUserController = new GetOrderByUserController();
const applyCouponController = new ApplyCouponController();
const updateStatusOrderController = new UpdateStatusOrderController();

ordersRoutes.post("/", ensureAuthenticated, createOrderController.handle);
ordersRoutes.get("/", ensureAuthenticated, ensureAdmin, getAllOrdersController.handle);
ordersRoutes.get("/:id", ensureAuthenticated, ensureAdmin, getOrderController.handle);
ordersRoutes.get("/1/user", ensureAuthenticated, getAllOrdersByUserController.handle);
ordersRoutes.get("/:id/user", ensureAuthenticated, getOrderByUserController.handle);
ordersRoutes.patch("/:id/coupon", ensureAuthenticated, applyCouponController.handle);
ordersRoutes.patch("/:id/status", ensureAuthenticated, ensureAdmin, updateStatusOrderController.handle);

export { ordersRoutes };