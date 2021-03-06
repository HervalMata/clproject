import {Router} from "express";
import {usersRoutes} from "./users.routes";
import {authenticateRoutes} from "./autenticates.routes";
import {passwordRoutes} from "./password.routes";
import {addressRoutes} from "./address.routes";
import {categoriesRoutes} from "./categories.routes";
import {colorsRoutes} from "./colors.routes";
import {materialsRoutes} from "./materials.routes";
import {productsRoutes} from "./products.routes";
import {reviewsRoutes} from "./reviews.routes";
import {wishlistsRoutes} from "./wishlists.routes";
import {couponsRoutes} from "./coupons.routes";
import {ordersRoutes} from "./orders.routes";
import {deliveriesRoutes} from "./deliveries.routes";
import {paymentsRoutes} from "./payments.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/password", passwordRoutes);
router.use("/address", addressRoutes);
router.use("/categories", categoriesRoutes);
router.use("/colors", colorsRoutes);
router.use("/materials", materialsRoutes);
router.use("/products", productsRoutes);
router.use("/reviews", reviewsRoutes);
router.use("/wishlists", wishlistsRoutes);
router.use("/coupons", couponsRoutes);
router.use("/orders", ordersRoutes);
router.use("/deliveries", deliveriesRoutes);
router.use("/payments", paymentsRoutes);

export {router};