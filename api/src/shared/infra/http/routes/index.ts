import { Router } from "express";
import {usersRoutes} from "./users.routes";
import {authenticateRoutes} from "./autenticates.routes";
import {passwordRoutes} from "./password.routes";
import {addressRoutes} from "./address.routes";
import {categoriesRoutes} from "./categories.routes";
import {colorsRoutes} from "./colors.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/password", passwordRoutes);
router.use("/address", addressRoutes);
router.use("/categories", categoriesRoutes);
router.use("/colors", colorsRoutes);

export { router };