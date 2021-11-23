import {IOrdersRepository} from "../IOrdersRepository";
import {ICreateOrdersDTO} from "../../dtos/ICreateOrdersDTO";
import {Order} from "../../entities/Order";
import {getRepository, Repository} from "typeorm";
import {v4 as uuidV4} from "uuid";

class OrdersRepository implements IOrdersRepository {
    private repository: Repository<Order>;

    constructor() {
        this.repository = getRepository(Order);
    }

    async applyCoupon(id: string, coupon_code: string, value: number): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({coupon_code: coupon_code, value: value})
            .where("id = :id")
            .setParameters({id}).execute();
    }

    async create(data: ICreateOrdersDTO): Promise<void> {
        const order_id = uuidV4();
        const {user_id, payment_id, delivery_id, coupon_code, status_order_id, value, products, code} = data;
        console.log(data)
        const order = {
            id: order_id,
            user_id,
            payment_id,
            delivery_id,
            coupon_code,
            status_order_id,
            value,
            products,
            code
        };
        console.log(order)
        await this.repository.save(order);
    }

    async findOrderByDelivery(delivery_id: string): Promise<Order> {
        return await this.repository.findOne({
            where: { delivery_id: delivery_id },
            relations: ['delivery', 'payment', 'products', 'statusOrder', 'user']
        });
    }

    async findById(id: string): Promise<Order> {
        return await this.repository.findOne({
            where: { id: id },
            relations: ['delivery', 'payment', 'user', 'products', 'statusOrder']
        });
    }

    async findOrderByPayment(payment_id: string): Promise<Order> {
        return await this.repository.findOne({
            where: { payment_id: payment_id },
            relations: ['delivery', 'payment', 'user', 'products', 'statusOrder']
        });
    }

    async findByStatus(status_delivery_id: string): Promise<Order[]> {
        return await this.repository.find({
            where: {status_order_id: status_delivery_id},
            relations: ['delivery', 'payment', 'statusOrder', 'user', 'products']
        });
    }

    async findByUser(user_id: string): Promise<Order[]> {
        return await this.repository.find({
            where: { user_id: user_id },
            relations: ['delivery', 'payment', 'statusOrder', 'user', 'products']
        });
    }

    async list(): Promise<Order[]> {
        return await this.repository.find({
            relations: ['delivery', 'payment', 'user', 'products', 'statusOrder']
        });
    }

    async updateStatus(id: string, status_order_id: string): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({status_order_id: status_order_id,})
            .where("id = :id")
            .setParameters({id}).execute();
    }

    async findByIdAndUser(id: string, user_id: string): Promise<Order> {
        return await this.repository.findOne({
            where: {id: id, user_id: user_id},
            relations: ['delivery', 'payment', 'user', 'products', 'statusOrder']
        });
    }

}

export { OrdersRepository };