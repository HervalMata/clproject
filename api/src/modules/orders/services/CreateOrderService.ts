import {inject, injectable} from "tsyringe";
import {IOrdersRepository} from "../repositories/IOrdersRepository";
import {Type, StatusDelivery} from "../../deliveries/entities/Delivery";
import {DeliveriesRepository} from "../../deliveries/repositories/implementations/DeliveriesRepository";
import {IDeliveriesRepository} from "../../deliveries/repositories/IDeliveriesRepository";
import {IPaymentsRepository} from "../../payments/repositories/IPaymentsRepository";
import {Method, StatusPayment} from "../../payments/entities/Payment";
import {StatusOrder} from "../entities/Order";
import {IProductsRepository} from "../../products/repositories/IProductsRepository";

interface IRequest {
    type: Type;
    is_free_cost?: boolean;
    cost: number;
    prize: number;
    street: string;
    number: number;
    complement?: string;
    district: string;
    postal_code: string;
    city: string;
    state: string;
    country?: string;
    method: Method;
    value: number;
    installments: number;
    taxes: number;
    discount?: number;
    total: number;
    user_id: string;
    value_order: number;
    products_id: string[];
}

@injectable()
class CreateOrderService {

    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository,
        @inject("DeliveriesRepository")
        private deliveriesRepository: IDeliveriesRepository,
        @inject("PaymentsRepository")
        private paymentsRepository: IPaymentsRepository,
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({
        type, street, number, complement, postal_code, district, state, city, cost, prize,
        method, value, installments, discount, taxes, total,
        user_id, value_order, products_id
                  }: IRequest): Promise<void> {
        const delivery = await this.deliveriesRepository.create({ type, status: StatusDelivery.packaging, street, number, complement, postal_code, district, state, city, cost, prize, country: "BRA" });
        const payment = await this.paymentsRepository.create({ method, status: StatusPayment.pending, value, installments, discount, taxes, total });
        const delivery_id = delivery.id;
        const payment_id = payment.id;
        await this.ordersRepository.create({ user_id, value: value_order, payment_id, delivery_id, status: StatusOrder.pending });
        const order = await this.ordersRepository.findOrderByPayment(payment_id);
        order.products = await this.productsRepository.findByIds(products_id);
        await this.ordersRepository.create(order);
    }
}

export { CreateOrderService };