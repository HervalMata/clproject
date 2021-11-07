import {Request, Response} from "express";
import { container } from "tsyringe";
import { SendForgotPasswordUserService } from "../services/SendForgotPasswordUserService";

class SendForgotPasswordUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email } = req.body;
        const sendForgotPasswordUserService = container.resolve(SendForgotPasswordUserService);
        await sendForgotPasswordUserService.execute(email);
        return res.status(200).send();
    }
}

export { SendForgotPasswordUserController };