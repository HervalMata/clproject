import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetMethodsPaymentService} from "../services/GetMethodsPaymentService";

class GetMethodsPaymentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        const getMethodsPaymentService = container.resolve(GetMethodsPaymentService);
        const method = await getMethodsPaymentService.execute({id});
        return res.status(200).json(method);
    }

}

export {GetMethodsPaymentController};