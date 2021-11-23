import {MethodsPaymentRepositoryInMemory} from "../repositories/in-memory/MethodsPaymentRepositoryInMemory";
import {CreateMethodsPaymentService} from "./CreateMethodsPaymentService";
import {GetAllMethodsPaymentService} from "./GetAllMethodsPaymentService";

let methodsPaymentRepositoryInMemory: MethodsPaymentRepositoryInMemory;
let createMethodsPaymentService: CreateMethodsPaymentService;
let getAllMethodsPaymentService: GetAllMethodsPaymentService;

describe('Get All Methods payment', () => {
    beforeEach(() => {
        methodsPaymentRepositoryInMemory = new MethodsPaymentRepositoryInMemory();
        createMethodsPaymentService = new CreateMethodsPaymentService(methodsPaymentRepositoryInMemory);
        getAllMethodsPaymentService = new GetAllMethodsPaymentService(methodsPaymentRepositoryInMemory);
    });

    it('should be able to get all methods of payment', async () => {
        const method = "method test";
        const method1 = "method test1";
        await createMethodsPaymentService.execute({method});
        await createMethodsPaymentService.execute({method: method1});
        const get_methods = await getAllMethodsPaymentService.execute();
        await expect(get_methods).toHaveLength(2);
    });

    it('should not be able to get all methods of payment non existent', async () => {
        const get_methods = await getAllMethodsPaymentService.execute();
        await expect(get_methods).toHaveLength(0);
    });
});