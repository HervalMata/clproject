import {Request, Response} from "express";
import {container} from "tsyringe";
import { UpdateUsersAddressService } from "../services/UpdateUsersAddressService";

class UpdateUsersAddressController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { type, street,
            number, postal_code, district, city, state, complement, } = req.body;
        const country = "BRA";
        const updateAddressService = container.resolve(UpdateUsersAddressService);
        await updateAddressService.execute({
            id, type, street,
            number, postal_code, district, city, state, complement, country
        });
        return res.status(200).send();
    }
}

export { UpdateUsersAddressController };