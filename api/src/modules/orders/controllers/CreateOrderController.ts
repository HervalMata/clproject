import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateOrderService} from "../services/CreateOrderService";

class CreateOrderController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const { type, street, number, complement, postal_code, district, state, city, cost, prize,
            method, value, installments, discount, taxes, total, value_order, products_id } = request.body;
        const createOrdersService = container.resolve(CreateOrderService);
        const products = await createOrdersService.execute({ type, street, number, complement, postal_code, district, state, city, cost, prize,
            method, value, installments, discount, taxes, total,
            user_id: id, value_order, products_id });
        return response.json(products);
    }
}

export { CreateOrderController };