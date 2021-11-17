import {CouponsRepositoryInMemory} from "../repositories/in-memory/CouponsRepositoryInMemory";
import {CreateCouponService} from "./CreateCouponService";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import {GetCouponService} from "./GetCouponService";
import {Type} from "../entities/Coupon";

let couponsRepositoryInMemory: CouponsRepositoryInMemory;
let createCouponService: CreateCouponService;
let dateProvider: DayjsDateProvider;
let getCouponService: GetCouponService;

describe('Get An Coupon', () => {
    beforeEach(() => {
        couponsRepositoryInMemory = new CouponsRepositoryInMemory();
        createCouponService = new CreateCouponService(couponsRepositoryInMemory);
        dateProvider = new DayjsDateProvider();
        getCouponService = new GetCouponService(couponsRepositoryInMemory);
    });

    it('should be able to get an coupon', async () => {
        const type = Type.percentage;
        const value = 25;
        const expire_date = dateProvider.addDays(20, dateProvider.dateNow());
        await createCouponService.execute({type, value, expire_date});
        const coupon = await couponsRepositoryInMemory.findByExpireDate(expire_date);
        const id = coupon.id;
        const get_coupon = await getCouponService.execute({id});
        expect(get_coupon.value).toEqual(25);
    });
});