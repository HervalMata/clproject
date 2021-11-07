import {Request, Response} from "express";
import { container } from "tsyringe";
import { RefreshTokenUserService } from "../services/RefreshTokenUserService";

class RefreshTokenUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const token = req.body.token || req.headers['x-access-token'] || req.query.token;
        const refreshTokenUserService = container.resolve(RefreshTokenUserService);
        const refreshToken = await refreshTokenUserService.execute(token);
        return res.status(200).json(refreshToken);
    }
}

export { RefreshTokenUserController };