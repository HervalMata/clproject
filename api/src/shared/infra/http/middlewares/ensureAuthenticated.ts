import {NextFunction, Request, Response} from "express";
import {AppError} from "../../../errors/AppError";
import {verify} from "jsonwebtoken";
import auth from "../../../../config/auth";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    req: Request, res: Response, next: NextFunction
): Promise<void> {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }
    const [, token] = authHeader.split(" ");
    try {
        const { sub: user_id } = verify(token, auth.secret_token) as IPayload;
        // @ts-ignore
        req.user = { id: user_id };
        next();
    } catch (error) {
        throw new AppError("Invalid Token");
    }
}