import {CouponsRepositoryInMemory} from "../repositories/in-memory/CouponsRepositoryInMemory";
import {CreateCouponService} from "./CreateCouponService";
import {Type} from "../entities/Coupon";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";

let couponsRepositoryInMemory: CouponsRepositoryInMemory;
let createCouponService: CreateCouponService;
let dateProvider: DayjsDateProvider;

describe('Create An Coupon', () => {
    beforeEach(() => {
        couponsRepositoryInMemory = new CouponsRepositoryInMemory();
        createCouponService = new CreateCouponService(couponsRepositoryInMemory);
        dateProvider = new DayjsDateProvider();
    });

    it('should be able to create an coupon', async () => {
        const type = Type.percentage;
        const value = 25;
        const expire_date = dateProvider.addDays(20, dateProvider.dateNow());
        await expect(createCouponService.execute({type, value, expire_date})).resolves.not.toThrow();
    });
});