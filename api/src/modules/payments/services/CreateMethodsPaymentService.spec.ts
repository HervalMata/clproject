import {MethodsPaymentRepositoryInMemory} from "../repositories/in-memory/MethodsPaymentRepositoryInMemory";
import {CreateMethodsPaymentService} from "./CreateMethodsPaymentService";
import {MethodPaymentExistentError} from "../errors/MethodPaymentExistentError";

let methodsPaymentRepositoryInMemory: MethodsPaymentRepositoryInMemory;
let createMethodsPaymentService: CreateMethodsPaymentService;

describe('Create Methods of Payment', () => {
    beforeEach(() => {
        methodsPaymentRepositoryInMemory = new MethodsPaymentRepositoryInMemory();
        createMethodsPaymentService = new CreateMethodsPaymentService(methodsPaymentRepositoryInMemory);
    });

    it('should be able to create an method of payment', async () => {
        const method = "method test";
        await expect(createMethodsPaymentService.execute({method})).resolves.not.toThrow();
    });

    it('should not be able to create an method of payment existent', async () => {
        const method = "method test";
        await createMethodsPaymentService.execute({method});
        await expect(createMethodsPaymentService.execute({method})).rejects.toBeInstanceOf(MethodPaymentExistentError);
    });
});