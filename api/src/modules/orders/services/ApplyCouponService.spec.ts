import {UsersRepositoryInMemory} from "../../users/repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "../../users/services/CreateUserService";
import {CategoryRepositoryInMemory} from "../../categories/repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "../../categories/services/CreateCategoryService";
import {ProductsRepositoryInMemory} from "../../products/repositories/in-memory/ProductsRepositoryInMemory";
import {CreateProductService} from "../../products/services/CreateProductService";
import {DeliveriesRepositoryInMemory} from "../../deliveries/repositories/in-memory/DeliveriesRepositoryInMemory";
import {PaymentsRepositoryInMemory} from "../../payments/repositories/in-memory/PaymentsRepositoryInMemory";
import {OrdersRepositoryInMemory} from "../repositories/in-memory/OrdersRepositoryInMemory";
import {CreateOrderService} from "./CreateOrderService";
import {ApplyCouponService} from "./ApplyCouponService";
import {CouponsRepositoryInMemory} from "../../coupons/repositories/in-memory/CouponsRepositoryInMemory";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import {Method} from "../../payments/entities/Payment";
import {CreateCouponService} from "../../coupons/services/CreateCouponService";
import {Type} from "../../deliveries/entities/Delivery";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let deliveriesRepositoryInMemory: DeliveriesRepositoryInMemory;
let paymentsRepositoryInMemory: PaymentsRepositoryInMemory;
let ordersRepositoryInMemory: OrdersRepositoryInMemory;
let createOrderService: CreateOrderService;
let couponsRepositoryInMemory: CouponsRepositoryInMemory;
let createCouponService: CreateCouponService;
let dateProvider: DayjsDateProvider;
let applyCouponService: ApplyCouponService;

describe('Apply Coupon', () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductService = new CreateProductService(productsRepositoryInMemory);
        deliveriesRepositoryInMemory = new DeliveriesRepositoryInMemory();
        paymentsRepositoryInMemory = new PaymentsRepositoryInMemory();
        ordersRepositoryInMemory = new OrdersRepositoryInMemory();
        dateProvider = new DayjsDateProvider();
        couponsRepositoryInMemory = new CouponsRepositoryInMemory();
        createCouponService = new CreateCouponService(couponsRepositoryInMemory);
        createOrderService = new CreateOrderService(
            ordersRepositoryInMemory, deliveriesRepositoryInMemory,
            paymentsRepositoryInMemory, productsRepositoryInMemory,
        );
        applyCouponService = new ApplyCouponService(
            ordersRepositoryInMemory, couponsRepositoryInMemory,
            paymentsRepositoryInMemory, dateProvider
        );
    });

    it('should be able to apply an coupon to order', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });
        const user_id = user.id;
        await createCategoryService.execute({
            name: "Category Test",
            description: "description category test"
        });
        const category = await categoryRepositoryInMemory.findByName("Category Test");
        const category_id = category.id;
        await createProductService.execute({
            name: "Product Test",
            description: "Description product test",
            stock: 1,
            price: 25.00,
            category_id: category_id,
        });
        const product1 = await productsRepositoryInMemory.findByName("Product Test");
        const product1_id = product1.id;
        await createProductService.execute({
            name: "Product Test1",
            description: "Description product test",
            stock: 1,
            price: 25.00,
            category_id: category_id,
        });
        const product2 = await productsRepositoryInMemory.findByName("Product Test1");
        const product2_id = product2.id;
        const cost = 0;
        const prize = 20;
        const street = "vfgghntjmu";
        const number = 10;
        const district = "dfnfhmu,";
        const postal_code = "cjjivncbwijnd";
        const state = "cdsvb";
        const city = "cndkjvndkj";
        const country = "BRA";
        const value = 10;
        const installments = 2;
        const taxes = 2;
        const total = 12;
        const products_id = [product1_id, product2_id];
        await createOrderService.execute({
            type: Type.post_offices,
            cost: cost, prize: prize, street: street, number: number,
            district: district, postal_code: postal_code, city: city, state: state, country: country,
            method: Method.pix,
            value: value, installments: installments, taxes: taxes,
            total: total, user_id: user_id, products_id
        });
        const order = await ordersRepositoryInMemory.findByUser(user_id);
        const order_unique = order[Object.keys(order)[0]];
        const order_id = order_unique.id;
        const coupon_value = 25;
        const type_coupon = 1;
        const expire_date = dateProvider.addDays(20, dateProvider.dateNow());
        await createCouponService.execute({type: type_coupon, value: coupon_value, expire_date});
        const coupon = await couponsRepositoryInMemory.findByExpireDate(expire_date);
        const coupon_code = coupon.code;
        await expect(applyCouponService.execute({ id: order_id, coupon_code: coupon_code })).resolves.not.toThrow();
    });
});