import "reflect-metadata";
import swaggerUi from "swagger-ui-express";
import "express-async-errors";
import express, { Request, Response } from "express";
import path from "path";
//import {HandlingErrors} from "./middlewares/HandlingErrors";
import createConnection from "../typeorm";
import swaggerFile from "../../../swagger.json";
import { router } from "./routes";
import '../../container';

createConnection();

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(
    "/api-coverage",
    express.static(
        path.resolve(__dirname, "..", "..", "..", "..", "coverage", "lcov-report")
    )
);
app.get("/api-coverage", (request: Request, response: Response) => {
    return response.sendFile(
        path.resolve(
            __dirname,
            "..",
            "..",
            "..",
            "..",
            "coverage",
            "lcov-report",
            "index.html"
        )
    );
});
app.use(router);
//app.use(HandlingErrors);

export { app };