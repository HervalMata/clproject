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
    cost?: number;
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
    value?: number;
    installments: number;
    taxes?: number;
    discount?: number;
    total?: number;
    user_id: string;
    value_order?: number;
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
        user_id, products_id
                  }: IRequest): Promise<void> {
        const codeDelivery = "DELIVERY-" + new Date().getDay() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds();
        const delivery = await this.deliveriesRepository.create({ code: codeDelivery, type, status: StatusDelivery.packaging, street, number, complement, postal_code, district, state, city, cost: cost || 0, prize, country: "BRA" });
        const codePayment = "PAYMENT-" + new Date().getDay() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds();
        const payment = await this.paymentsRepository.create({ code: codePayment, method, status: StatusPayment.pending, value: value || 0, installments, discount: discount || 0, taxes: taxes || 0, total: total || 0 });
        const delivery_id = delivery.id;
        const payment_id = payment.id;
        const codeOrder = "ORDER-" + new Date().getDay() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds();
        await this.ordersRepository.create({ code: codeOrder, user_id, value: payment.value, payment_id, delivery_id, status: StatusOrder.pending });
        const order_existent = await this.ordersRepository.findOrderByPayment(payment_id);
        order_existent.products = await this.productsRepository.findByIds(products_id);
        //await this.ordersRepository.create(order_existent);
    }
}

export { CreateOrderService };