import {ICouponsRepository} from "../ICouponsRepository";
import {ICreateCouponDTO} from "../../dtos/ICreateCouponDTO";
import {Coupon, Type} from "../../entities/Coupon";

class CouponsRepositoryInMemory implements ICouponsRepository {
    coupons: Coupon[] = [];

    async create(data: ICreateCouponDTO): Promise<void> {
        const { code, type, expire_date, value } = data;
        const coupon = new Coupon();
        Object.assign(coupon, {
            code, type, expire_date, value
        });
        this.coupons.push(coupon);
    }

    async findByCode(code: string): Promise<Coupon> {
        return this.coupons.find((coupon) => coupon.code === code);
    }

    async findByExpireDate(expire_date: Date): Promise<Coupon> {
        return this.coupons.find((coupon) => coupon.expire_date === expire_date);
    }

    async findById(id: string): Promise<Coupon> {
        return this.coupons.find((coupon) => coupon.id === id);
    }

    async findByType(type: Type): Promise<Coupon[]> {
        return this.coupons.filter((coupon) => coupon.type === type);
    }

    async list(): Promise<Coupon[]> {
        return this.coupons;
    }

    async update(id: string, expire_date: Date): Promise<void> {
        const couponIndex = this.coupons.findIndex((coupon) => coupon.id === id);
        this.coupons[couponIndex].expire_date = expire_date;
    }

}

export { CouponsRepositoryInMemory };