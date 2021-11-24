import {Router} from "express";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {CreateMethodsPaymentController} from "../../../../modules/payments/controllers/CreateMethodsPaymentController";
import {GetAllMethodsPaymentController} from "../../../../modules/payments/controllers/GetAllMethodsPaymentController";
import {CreateStatusPaymentController} from "../../../../modules/payments/controllers/CreateStatusPaymentController";
import {GetMethodsPaymentController} from "../../../../modules/payments/controllers/GetMethodsPaymentController";
import {GetAllStatusPaymentController} from "../../../../modules/payments/controllers/GetAllStatusPaymentController";
import {GetStatusPaymentController} from "../../../../modules/payments/controllers/GetStatusPaymentController";
import {GetAllPaymentsController} from "../../../../modules/payments/controllers/GetAllPaymentsController";
import {GetPaymentController} from "../../../../modules/payments/controllers/GetPaymentController";
import {UpdateStatusPaymentController} from "../../../../modules/payments/controllers/UpdateStatusPaymentController";

const paymentsRoutes = Router();
const createMethodsPaymentController = new CreateMethodsPaymentController();
const getAllMethodsPaymentController = new GetAllMethodsPaymentController();
const getMethodsPaymentController = new GetMethodsPaymentController();
const createStatusPaymentController = new CreateStatusPaymentController();
const getAllStatusPaymentController = new GetAllStatusPaymentController();
const getStatusPaymentController = new GetStatusPaymentController();
const getAllPaymentsController = new GetAllPaymentsController();
const getPaymentController = new GetPaymentController();
const updateStatusPaymentController = new UpdateStatusPaymentController();

paymentsRoutes.post("/methods", ensureAuthenticated, ensureAdmin, createMethodsPaymentController.handle);
paymentsRoutes.post("/status", ensureAuthenticated, ensureAdmin, createStatusPaymentController.handle);
paymentsRoutes.get("/methods", getAllMethodsPaymentController.handle);
paymentsRoutes.get("/status", getAllStatusPaymentController.handle);
paymentsRoutes.get("/:id/methods", getMethodsPaymentController.handle);
paymentsRoutes.get("/:id/status", getStatusPaymentController.handle);
paymentsRoutes.get("/", ensureAuthenticated, ensureAdmin, getAllPaymentsController.handle);
paymentsRoutes.get("/:id", ensureAuthenticated, ensureAdmin, getPaymentController.handle);
paymentsRoutes.patch("/:id", ensureAuthenticated, ensureAdmin, updateStatusPaymentController.handle);

export {paymentsRoutes};