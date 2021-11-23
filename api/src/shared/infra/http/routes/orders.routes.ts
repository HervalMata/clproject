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
import {CreateStatusOrderController} from "../../../../modules/orders/controllers/CreateStatusOrderController";
import {GetAllStatusOrderController} from "../../../../modules/orders/controllers/GetAllStatusOrderController";
import {GetStatusOrderController} from "../../../../modules/orders/controllers/GetStatusOrderController";

const ordersRoutes = Router();
const createOrderController = new CreateOrderController();
const getAllOrdersController = new GetAllOrdersController();
const getOrderController = new GetOrderController();
const getAllOrdersByUserController = new GetAllOrdersByUserController();
const getOrderByUserController = new GetOrderByUserController();
const applyCouponController = new ApplyCouponController();
const updateStatusOrderController = new UpdateStatusOrderController();
const createStatusOrderController = new CreateStatusOrderController();
const getAllStatusOrderController = new GetAllStatusOrderController();
const getStatusOrderController = new GetStatusOrderController();

ordersRoutes.post("/", ensureAuthenticated, createOrderController.handle);
ordersRoutes.get("/", ensureAuthenticated, ensureAdmin, getAllOrdersController.handle);
ordersRoutes.get("/:id", ensureAuthenticated, ensureAdmin, getOrderController.handle);
ordersRoutes.get("/:user_id/user", ensureAuthenticated, getAllOrdersByUserController.handle);
ordersRoutes.get("/user/:id", ensureAuthenticated, getOrderByUserController.handle);
ordersRoutes.patch("/:id/coupon", ensureAuthenticated, applyCouponController.handle);
ordersRoutes.patch("/:id/status", ensureAuthenticated, ensureAdmin, updateStatusOrderController.handle);
ordersRoutes.post("/status", ensureAuthenticated, ensureAdmin, createStatusOrderController.handle);
ordersRoutes.get("/1/status", getAllStatusOrderController.handle);
ordersRoutes.get("/:id/status", getStatusOrderController.handle);

export {ordersRoutes};