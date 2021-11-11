import {Request, Response} from "express";
import {container} from "tsyringe";
import { CreateUsersAddressService } from "../services/CreateUsersAddressService";

class CreateUsersAddressController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.user;
        const { type, street,
            number, postal_code, district, city, state, complement } = req.body;
        const country = "BRA";
        const createUsersAddressService = container.resolve(CreateUsersAddressService);
        await createUsersAddressService.execute({ user_id: id, type, street,
            number, postal_code, district, city, state, complement, country
        });
        return res.status(201).send();
    }
}

export { CreateUsersAddressController };