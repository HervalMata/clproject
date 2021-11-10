import {NextFunction, Request, Response} from "express";
import {UsersRepository} from "../../../../modules/users/repositories/implementations/UsersRepository";
import {AppError} from "../../../errors/AppError";

export async function ensureAdmin(
    req: Request, res: Response, next: NextFunction
): Promise<void> {

    const { id } = req.user;
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(id);
    console.log(user)
    if (!user.is_admin) {
        throw new AppError("User does not have admin privileges");
    }
    next();
}