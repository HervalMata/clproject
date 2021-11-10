import {Request, Response} from "express";
import {container} from "tsyringe";
import { GetUsersAddressService } from "../services/GetUsersAddressService";

class GetUsersAddressController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id } = req.params;
        const getUsersAddressService = container.resolve(GetUsersAddressService);
        const users_address = await getUsersAddressService.execute({ user_id: user_id });
        return res.status(200).json(users_address);
    }
}

export { GetUsersAddressController };