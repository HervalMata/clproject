import {CouponsRepositoryInMemory} from "../repositories/in-memory/CouponsRepositoryInMemory";
import {CreateCouponService} from "./CreateCouponService";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import {GetAllCouponsService} from "./GetAllCouponsService";
import {Type} from "../entities/Coupon";

let couponsRepositoryInMemory: CouponsRepositoryInMemory;
let createCouponService: CreateCouponService;
let dateProvider: DayjsDateProvider;
let getAllCouponsService: GetAllCouponsService;

describe('Get All Coupons', () => {
    beforeEach(() => {
        couponsRepositoryInMemory = new CouponsRepositoryInMemory();
        createCouponService = new CreateCouponService(couponsRepositoryInMemory);
        dateProvider = new DayjsDateProvider();
        getAllCouponsService = new GetAllCouponsService(couponsRepositoryInMemory);
    });

    it('should be able to get all coupons', async () => {
        const type = Type.fixed
        const value = 30;
        const expire_date = dateProvider.addDays(20, dateProvider.dateNow());
        const type1 = Type.percentage;
        const value1 = 25;
        const expire_date1 = dateProvider.addDays(30, dateProvider.dateNow());
        await createCouponService.execute({type, value, expire_date});
        await new Promise(res => setTimeout(res, 4500));
        await createCouponService.execute({type: type1, value: value1, expire_date: expire_date1})
        await expect(await getAllCouponsService.execute()).toHaveLength(2);
    });

    it('should not be able to get all coupons non existent', async () => {
        await expect(await getAllCouponsService.execute()).toHaveLength(0);
    });
});