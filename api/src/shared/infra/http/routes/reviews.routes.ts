import { Router } from "express";
import {CreateReviewController} from "../../../../modules/reviews/controllers/CreateReviewController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {GetReviewsByUserController} from "../../../../modules/reviews/controllers/GetReviewsByUserController";

const reviewsRoutes = Router();
const createReviewController = new CreateReviewController();
const getReviewsByUserController = new GetReviewsByUserController();

reviewsRoutes.post("/:product_id", ensureAuthenticated, createReviewController.handle);
reviewsRoutes.get("/", ensureAuthenticated, getReviewsByUserController.handle);

export { reviewsRoutes };