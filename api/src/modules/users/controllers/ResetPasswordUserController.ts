import {Request, Response} from "express";
import { container } from "tsyringe";
import { ResetPasswordUserService } from "../services/ResetPasswordUserService";

class ResetPasswordUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { token } = req.query;
        const { password } = req.body;
        const resetPasswordUserService = container.resolve(ResetPasswordUserService);
        await resetPasswordUserService.execute({
            token: String(token), password,
        });
        return res.status(200).send();
    }
}

export { ResetPasswordUserController };