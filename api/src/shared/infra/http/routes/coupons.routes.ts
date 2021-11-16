import {Router} from "express";
import {CreateCouponController} from "../../../../modules/coupons/controllers/CreateCouponController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {GetAllCouponsController} from "../../../../modules/coupons/controllers/GetAllCouponsController";

const couponsRoutes = Router();
const createCouponController = new CreateCouponController();
const getAllCouponsController = new GetAllCouponsController();

couponsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCouponController.handle);
couponsRoutes.get("/", ensureAuthenticated, ensureAdmin, getAllCouponsController.handle);

export { couponsRoutes };