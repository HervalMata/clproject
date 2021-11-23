import {StatusPaymentRepositoryInMemory} from "../repositories/in-memory/StatusPaymentRepositoryInMemory";
import {CreateStatusPaymentService} from "./CreateStatusPaymentService";
import {StatusPaymentExistentError} from "../errors/StatusPaymentExistentError";

let statusPaymentRepositoryInMemory: StatusPaymentRepositoryInMemory;
let createStatusPaymentService: CreateStatusPaymentService;

describe('Create Status of Payment', () => {
    beforeEach(() => {
        statusPaymentRepositoryInMemory = new StatusPaymentRepositoryInMemory();
        createStatusPaymentService = new CreateStatusPaymentService(statusPaymentRepositoryInMemory);
    });

    it('should be able to create an status of payment', async () => {
        const status_payment = "status test";
        await expect(createStatusPaymentService.execute({status_payment})).resolves.not.toThrow();
    });

    it('should not be able to create an status of payment existent', async () => {
        const status_payment = "status test";
        await createStatusPaymentService.execute({status_payment});
        await expect(createStatusPaymentService.execute({status_payment})).rejects.toBeInstanceOf(StatusPaymentExistentError);
    });
});