import { Router } from "express";
import {usersRoutes} from "./users.routes";
import {authenticateRoutes} from "./autenticates.routes";
import {passwordRoutes} from "./password.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/password", passwordRoutes);

export { router };