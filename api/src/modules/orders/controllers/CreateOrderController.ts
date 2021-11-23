import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateOrderService} from "../services/CreateOrderService";

class CreateOrderController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.user;
        const {
            type_delivery_id, street, number, complement, postal_code, district, state, city, cost, prize,
            method_id, value, installments, discount, taxes, total, value_order, products_id
        } = request.body;
        console.log(request.body)
        const createOrdersService = container.resolve(CreateOrderService);
        const orders = await createOrdersService.execute({
            type_delivery_id, street, number, complement, postal_code, district, state, city, cost, prize,
            method_id, value, installments, discount, taxes, total,
            user_id: id, value_order, products_id
        });
        return response.json(orders);
    }
}

export { CreateOrderController };