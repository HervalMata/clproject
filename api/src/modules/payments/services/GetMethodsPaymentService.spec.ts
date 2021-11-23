import {MethodsPaymentRepositoryInMemory} from "../repositories/in-memory/MethodsPaymentRepositoryInMemory";
import {CreateMethodsPaymentService} from "./CreateMethodsPaymentService";
import {GetMethodsPaymentService} from "./GetMethodsPaymentService";

let methodsPaymentRepositoryInMemory: MethodsPaymentRepositoryInMemory;
let createMethodsPaymentService: CreateMethodsPaymentService;
let getMethodsPaymentService: GetMethodsPaymentService;

describe('Get an methods payment', () => {
    beforeEach(() => {
        methodsPaymentRepositoryInMemory = new MethodsPaymentRepositoryInMemory();
        createMethodsPaymentService = new CreateMethodsPaymentService(methodsPaymentRepositoryInMemory);
        getMethodsPaymentService = new GetMethodsPaymentService(methodsPaymentRepositoryInMemory);
    });

    it('should be able to get an methods of payment', async () => {
        const method = "method test";
        await createMethodsPaymentService.execute({method});
        const methods = await methodsPaymentRepositoryInMemory.findByMethodPayment("method test");
        const id = methods.id;
        const methodsPayment = await getMethodsPaymentService.execute({id});
        await expect(methodsPayment.method).toEqual("method test");
    });

    it('should not be able to get an methods of payment non existent', async () => {
        const id = "hntyjkklikluç";
        const methodsPayment = await getMethodsPaymentService.execute({id});
        await expect(methodsPayment).toBe(undefined);
    });
});