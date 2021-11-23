import {StatusPaymentRepositoryInMemory} from "../repositories/in-memory/StatusPaymentRepositoryInMemory";
import {CreateStatusPaymentService} from "./CreateStatusPaymentService";
import {GetStatusPaymentService} from "./GetStatusPaymentService";

let statusPaymentRepositoryInMemory: StatusPaymentRepositoryInMemory;
let createStatusPaymentService: CreateStatusPaymentService;
let getStatusPaymentService: GetStatusPaymentService;

describe('Get an status payment', () => {
    beforeEach(() => {
        statusPaymentRepositoryInMemory = new StatusPaymentRepositoryInMemory();
        createStatusPaymentService = new CreateStatusPaymentService(statusPaymentRepositoryInMemory);
        getStatusPaymentService = new GetStatusPaymentService(statusPaymentRepositoryInMemory);
    });

    it('should be able to get an status of payment', async () => {
        const status_payment = "status test";
        await createStatusPaymentService.execute({status_payment});
        const status = await statusPaymentRepositoryInMemory.findByStatusPayment("status test");
        const id = status.id;
        const statusPayment = await getStatusPaymentService.execute({id});
        await expect(statusPayment.status_payment).toEqual("status test");
    });

    it('should not be able to get an status of payment non existent', async () => {
        const id = "hntyjkklikluç";
        const statusPayment = await getStatusPaymentService.execute({id});
        await expect(statusPayment).toBe(undefined);
    });
});