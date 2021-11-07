import { Router } from "express";
import {usersRoutes} from "./users.routes";
import {authenticateRoutes} from "./autenticates.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/sessions", authenticateRoutes);

export { router };