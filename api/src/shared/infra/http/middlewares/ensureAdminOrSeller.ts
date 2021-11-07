import {NextFunction, Request, Response} from "express";
import {UsersRepository} from "../../../../modules/users/repositories/implementations/UsersRepository";
import {AppError} from "../../../errors/AppError";

export async function ensureAdminOrSeller(
    req: Request, res: Response, next: NextFunction
): Promise<void> {
    // @ts-ignore
    const { id } = req.user;
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(id);
    if (!user.is_admin || !user.is_seller) {
        throw new AppError("User does not have admin or seller privileges");
    }
}