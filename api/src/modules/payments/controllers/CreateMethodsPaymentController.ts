import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateMethodsPaymentService} from "../services/CreateMethodsPaymentService";

class CreateMethodsPaymentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {method} = req.body;
        const createMethodsPaymentService = container.resolve(CreateMethodsPaymentService);
        await createMethodsPaymentService.execute({method});
        return res.status(201).send();
    }
}

export {CreateMethodsPaymentController};