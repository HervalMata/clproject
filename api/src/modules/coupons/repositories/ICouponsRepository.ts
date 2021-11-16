import {ICreateCouponDTO} from "../dtos/ICreateCouponDTO";
import {Coupon, Type} from "../entities/Coupon";

interface ICouponsRepository {
    create(data: ICreateCouponDTO): Promise<void>;
    list(): Promise<Coupon[]>;
    findById(id: string): Promise<Coupon>;
    findByType(type: Type): Promise<Coupon[]>;
    findByExpireDate(expire_date: Date): Promise<Coupon>;
    update(id: string, expire_date: Date): Promise<void>;
    findByCode(code: string): Promise<Coupon>;
}

export { ICouponsRepository };