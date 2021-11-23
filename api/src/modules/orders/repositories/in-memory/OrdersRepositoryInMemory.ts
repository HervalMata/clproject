import {IOrdersRepository} from "../IOrdersRepository";
import {ICreateOrdersDTO} from "../../dtos/ICreateOrdersDTO";
import {Order} from "../../entities/Order";

class OrdersRepositoryInMemory implements IOrdersRepository {
    orders: Order[] = [];

    async applyCoupon(id: string, coupon_code: string): Promise<void> {
        const orderIndex = this.orders.findIndex((order) => order.id === id);
        this.orders[orderIndex].coupon_code = coupon_code;
    }

    async create(data: ICreateOrdersDTO): Promise<void> {
        const {code, user_id, payment_id, delivery_id, coupon_code, status_order_id, value, products} = data;
        const order = new Order();
        Object.assign(order, {code, user_id, payment_id, delivery_id, coupon_code, status_order_id, value, products});
        this.orders.push(order);
    }

    async findById(id: string): Promise<Order> {
        return this.orders.find((order) => order.id === id);
    }

    async findByIdAndUser(id: string, user_id: string): Promise<Order> {
        return this.orders.find((order) => [order.id === id && order.user_id === user_id]);
    }

    async findByStatus(status_order_id: string): Promise<Order[]> {
        return this.orders.filter((order) => order.status_order_id === status_order_id);
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

    async updateStatus(id: string, status_order_id: string): Promise<void> {
        const orderIndex = this.orders.findIndex((order) => order.id === id);
        this.orders[orderIndex].status_order_id = status_order_id;
    }

}

export { OrdersRepositoryInMemory };