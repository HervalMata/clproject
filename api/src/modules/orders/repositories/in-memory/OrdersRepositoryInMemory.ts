import {IOrdersRepository} from "../IOrdersRepository";
import {ICreateOrdersDTO} from "../../dtos/ICreateOrdersDTO";
import {Order, StatusOrder} from "../../entities/Order";

class OrdersRepositoryInMemory implements IOrdersRepository {
    orders: Order[] = [];

    async applyCoupon(id: string, coupon_code: string): Promise<void> {
        const orderIndex = this.orders.findIndex((order) => order.id === id);
        this.orders[orderIndex].coupon_code = coupon_code;
    }

    async create(data: ICreateOrdersDTO): Promise<void> {
        const { id, code,  user_id, payment_id,  delivery_id, coupon_code, status, value, products } = data;
        const order = new Order();
        Object.assign(order, { id, code,  user_id, payment_id,  delivery_id, coupon_code, status, value, products });
        this.orders.push(order);
    }

    async findById(id: string): Promise<Order> {
        return this.orders.find((order) => order.id === id);
    }

    async findByIdAndUser(id: string, user_id: string): Promise<Order> {
        return this.orders.find((order) => [order.id === id && order.user_id === user_id]);
    }

    async findByStatus(status: StatusOrder): Promise<Order[]> {
        return this.orders.filter((order) => order.status === status);
    }

    async findByUser(user_id: string): Promise<Order[]> {
        return this.orders.filter((order) => order.user_id === user_id);
    }

    async findOrderByDelivery(delivery_id: string): Promise<Order> {
        return this.orders.find((order) => order.delivery_id === delivery_id);
    }

    async findOrderByPayment(payment_id: string): Promise<Order> {
        return this.orders.find((order) => order.payment_id === payment_id);
    }

    async list(): Promise<Order[]> {
        return this.orders;
    }

    async updateStatus(id: string, status: StatusOrder): Promise<void> {
        const orderIndex = this.orders.findIndex((order) => order.id === id);
        this.orders[orderIndex].status = status;
    }

}

export { OrdersRepositoryInMemory };