import {CouponsRepositoryInMemory} from "../repositories/in-memory/CouponsRepositoryInMemory";
import {CreateCouponService} from "./CreateCouponService";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import {UpdateCouponService} from "./UpdateCouponService";
import {Type} from "../entities/Coupon";

let couponsRepositoryInMemory: CouponsRepositoryInMemory;
let createCouponService: CreateCouponService;
let dateProvider: DayjsDateProvider;
let updateCouponService: UpdateCouponService;

describe('Update An Coupon', () => {
    beforeEach(() => {
        couponsRepositoryInMemory = new CouponsRepositoryInMemory();
        createCouponService = new CreateCouponService(couponsRepositoryInMemory);
        dateProvider = new DayjsDateProvider();
        updateCouponService = new UpdateCouponService(couponsRepositoryInMemory);
    });

    it('should be able update an coupon', async () => {
        const type = Type.percentage;
        const value = 25;
        const expire_date = dateProvider.addDays(20, dateProvider.dateNow());
        await createCouponService.execute({type, value, expire_date});
        const coupon = await couponsRepositoryInMemory.findByExpireDate(expire_date);
        const id = coupon.id;
        const new_expire_date = dateProvider.addDays(30, dateProvider.dateNow());
        await expect(updateCouponService.execute({ id, expire_date: new_expire_date})).resolves.not.toThrow();
    });
});