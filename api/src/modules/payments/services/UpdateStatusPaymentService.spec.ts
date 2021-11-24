import {UsersRepositoryInMemory} from "../../users/repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "../../users/services/CreateUserService";
import {CategoryRepositoryInMemory} from "../../categories/repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "../../categories/services/CreateCategoryService";
import {ProductsRepositoryInMemory} from "../../products/repositories/in-memory/ProductsRepositoryInMemory";
import {CreateProductService} from "../../products/services/CreateProductService";
import {DeliveriesRepositoryInMemory} from "../../deliveries/repositories/in-memory/DeliveriesRepositoryInMemory";
import {PaymentsRepositoryInMemory} from "../repositories/in-memory/PaymentsRepositoryInMemory";
import {OrdersRepositoryInMemory} from "../../orders/repositories/in-memory/OrdersRepositoryInMemory";
import {CreateOrderService} from "../../orders/services/CreateOrderService";
import {UpdateStatusPaymentService} from "./UpdateStatusPaymentService";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import {StatusOrderRepositoryInMemory} from "../../orders/repositories/in-memory/StatusOrderRepositoryInMemory";
import {TypesDeliveryRepositoryInMemory} from "../../deliveries/repositories/in-memory/TypesDeliveryRepositoryInMemory";
import {MethodsPaymentRepositoryInMemory} from "../repositories/in-memory/MethodsPaymentRepositoryInMemory";
import {StatusPaymentRepositoryInMemory} from "../repositories/in-memory/StatusPaymentRepositoryInMemory";
import {StatusDeliveryRepositoryInMemory} from "../../deliveries/repositories/in-memory/StatusDeliveryRepositoryInMemory";
import {CreateStatusDeliveryService} from "../../deliveries/services/CreateStatusDeliveryService";
import {CreateStatusPaymentService} from "./CreateStatusPaymentService";
import {CreateStatusOrderService} from "../../orders/services/CreateStatusOrderService";
import {CreateMethodsPaymentService} from "./CreateMethodsPaymentService";
import {CreateTypesDeliveryService} from "../../deliveries/services/CreateTypesDeliveryService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let deliveriesRepositoryInMemory: DeliveriesRepositoryInMemory;
let paymentsRepositoryInMemory: PaymentsRepositoryInMemory;
let statusOrderRepositoryInMemory: StatusOrderRepositoryInMemory;
let typesDeliveryRepositoryInMemory: TypesDeliveryRepositoryInMemory;
let methodsPaymentRepositoryInMemory: MethodsPaymentRepositoryInMemory;
let statusPaymentRepositoryInMemory: StatusPaymentRepositoryInMemory;
let statusDeliveryRepositoryInMemory: StatusDeliveryRepositoryInMemory;
let createStatusDeliveryService: CreateStatusDeliveryService;
let createStatusPaymentService: CreateStatusPaymentService;
let createStatusOrderService: CreateStatusOrderService;
let createMethodsPaymentService: CreateMethodsPaymentService;
let createTypesDeliveryService: CreateTypesDeliveryService;
let ordersRepositoryInMemory: OrdersRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let createOrderService: CreateOrderService;
let updateStatusPaymentService: UpdateStatusPaymentService;

describe('Update Status Order', () => {
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
        typesDeliveryRepositoryInMemory = new TypesDeliveryRepositoryInMemory();
        statusDeliveryRepositoryInMemory = new StatusDeliveryRepositoryInMemory();
        methodsPaymentRepositoryInMemory = new MethodsPaymentRepositoryInMemory();
        statusPaymentRepositoryInMemory = new StatusPaymentRepositoryInMemory();
        statusOrderRepositoryInMemory = new StatusOrderRepositoryInMemory();
        createStatusDeliveryService = new CreateStatusDeliveryService(statusDeliveryRepositoryInMemory);
        createMethodsPaymentService = new CreateMethodsPaymentService(methodsPaymentRepositoryInMemory);
        createStatusPaymentService = new CreateStatusPaymentService(statusPaymentRepositoryInMemory);
        createTypesDeliveryService = new CreateTypesDeliveryService(typesDeliveryRepositoryInMemory);
        createStatusOrderService = new CreateStatusOrderService(statusOrderRepositoryInMemory);
        dateProvider = new DayjsDateProvider();
        createOrderService = new CreateOrderService(
            ordersRepositoryInMemory, deliveriesRepositoryInMemory,
            paymentsRepositoryInMemory, productsRepositoryInMemory,
            statusDeliveryRepositoryInMemory,
            statusPaymentRepositoryInMemory, statusOrderRepositoryInMemory
        );
        updateStatusPaymentService = new UpdateStatusPaymentService(paymentsRepositoryInMemory, dateProvider, statusPaymentRepositoryInMemory);
    });

    it('should be able to update an status order', async () => {
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
        const type_delivery = "post_offices";
        await createTypesDeliveryService.execute({type_delivery});
        const types_delivery = await typesDeliveryRepositoryInMemory.findByTypeDelivery("post_offices");
        const type_delivery_id = types_delivery.id;
        const status_delivery = "packaging";
        await createStatusDeliveryService.execute({status_delivery});
        const statusDelivery = await statusDeliveryRepositoryInMemory.findByStatusDelivery("packaging");
        const status_delivery_id = statusDelivery.id;
        const status_payment = "pending";
        await createStatusPaymentService.execute({status_payment});
        const statusPayment = await statusPaymentRepositoryInMemory.findByStatusPayment("pending");
        const status_payment_id = statusPayment.id;
        const status_order = "pending";
        await createStatusOrderService.execute({status_order});
        const statusOrder = await statusOrderRepositoryInMemory.findByStatusOrder("pending");
        const status_order_id = statusOrder.id;
        const method = "pix";
        await createMethodsPaymentService.execute({method: method});
        const methods = await methodsPaymentRepositoryInMemory.findByMethodPayment("pix");
        const method_id = methods.id;
        await createOrderService.execute({
            type_delivery_id: type_delivery_id,
            cost: cost, prize: prize, street: street, number: number,
            district: district, postal_code: postal_code, city: city, state: state, country: country,
            method_id: method_id,
            value: value, installments: installments, taxes: taxes,
            total: total, user_id: user_id, products_id
        });
        const order = await ordersRepositoryInMemory.findByUser(user_id);
        const order_unique = order[Object.keys(order)[0]];
        const payment_id = order_unique.payment_id;
        await expect(updateStatusPaymentService.execute({
            id: payment_id,
            status_payment_id: status_payment_id
        })).resolves.not.toThrow();
    });
});