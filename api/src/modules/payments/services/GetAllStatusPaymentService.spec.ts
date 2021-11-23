import {StatusPaymentRepositoryInMemory} from "../repositories/in-memory/StatusPaymentRepositoryInMemory";
import {CreateStatusPaymentService} from "./CreateStatusPaymentService";
import {GetAllStatusPaymentService} from "./GetAllStatusPaymentService";

let statusPaymentRepositoryInMemory: StatusPaymentRepositoryInMemory;
let createStatusPaymentService: CreateStatusPaymentService;
let getAllStatusPaymentService: GetAllStatusPaymentService;

describe('Get All Status payment', () => {
    beforeEach(() => {
        statusPaymentRepositoryInMemory = new StatusPaymentRepositoryInMemory();
        createStatusPaymentService = new CreateStatusPaymentService(statusPaymentRepositoryInMemory);
        getAllStatusPaymentService = new GetAllStatusPaymentService(statusPaymentRepositoryInMemory);
    });

    it('should be able to get all status of payment', async () => {
        const status_payment = "status test";
        const status_payment1 = "status test1";
        await createStatusPaymentService.execute({status_payment});
        await createStatusPaymentService.execute({status_payment: status_payment1});
        const get_status = await getAllStatusPaymentService.execute();
        await expect(get_status).toHaveLength(2);
    });

    it('should not be able to get all status of payment non existent', async () => {
        const get_status = await getAllStatusPaymentService.execute();
        await expect(get_status).toHaveLength(0);
    });
});