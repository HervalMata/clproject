import { Router } from "express";
import {CreateReviewController} from "../../../../modules/reviews/controllers/CreateReviewController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {GetReviewsByUserController} from "../../../../modules/reviews/controllers/GetReviewsByUserController";
import {GetReviewsByProductController} from "../../../../modules/reviews/controllers/GetReviewsByProductController";

const reviewsRoutes = Router();
const createReviewController = new CreateReviewController();
const getReviewsByUserController = new GetReviewsByUserController();
const getReviewsByProductController = new GetReviewsByProductController();

reviewsRoutes.post("/:product_id", ensureAuthenticated, createReviewController.handle);
reviewsRoutes.get("/", ensureAuthenticated, getReviewsByUserController.handle);
reviewsRoutes.get("/:product_id", getReviewsByProductController.handle);

export { reviewsRoutes };