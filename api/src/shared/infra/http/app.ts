import express, {NextFunction} from "express";
import swaggerUi from "swagger-ui-express";
import 'reflect-metadata';
import "express-async-errors";
//import {HandlingErrors} from "./middlewares/HandlingErrors";
import {createConnection} from "typeorm/browser";
import swaggerFile from "../../../swagger.json";
import { router } from "./routes";

createConnection();

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);
//app.use(HandlingErrors);

export { app };