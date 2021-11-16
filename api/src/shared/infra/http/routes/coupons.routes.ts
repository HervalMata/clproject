import {Router} from "express";
import {CreateCouponController} from "../../../../modules/coupons/controllers/CreateCouponController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {GetAllCouponsController} from "../../../../modules/coupons/controllers/GetAllCouponsController";
import {GetCouponController} from "../../../../modules/coupons/controllers/GetCouponController";
import {UpdateCouponController} from "../../../../modules/coupons/controllers/UpdateCouponController";

const couponsRoutes = Router();
const createCouponController = new CreateCouponController();
const getAllCouponsController = new GetAllCouponsController();
const getCouponController = new GetCouponController();
const updateCouponController = new UpdateCouponController();

couponsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCouponController.handle);
couponsRoutes.get("/", ensureAuthenticated, ensureAdmin, getAllCouponsController.handle);
couponsRoutes.get("/:id", ensureAuthenticated, ensureAdmin, getCouponController.handle);
couponsRoutes.patch("/:id", ensureAuthenticated, ensureAdmin, updateCouponController.handle);

export { couponsRoutes };