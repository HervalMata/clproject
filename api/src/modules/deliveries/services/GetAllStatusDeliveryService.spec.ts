import {StatusDeliveryRepositoryInMemory} from "../repositories/in-memory/StatusDeliveryRepositoryInMemory";
import {CreateStatusDeliveryService} from "./CreateStatusDeliveryService";
import {GetAllStatusDeliveryService} from "./GetAllStatusDeliveryService";

let statusDeliveryRepositoryInMemory: StatusDeliveryRepositoryInMemory;
let createStatusDeliveryService: CreateStatusDeliveryService;
let getAllStatusDeliveryService: GetAllStatusDeliveryService;

describe('Get All Status delivery', () => {
    beforeEach(() => {
        statusDeliveryRepositoryInMemory = new StatusDeliveryRepositoryInMemory();
        createStatusDeliveryService = new CreateStatusDeliveryService(statusDeliveryRepositoryInMemory);
        getAllStatusDeliveryService = new GetAllStatusDeliveryService(statusDeliveryRepositoryInMemory);
    });

    it('should be able to get all status of delivery', async () => {
        const status_delivery = "status test";
        const status_delivery1 = "status test1";
        await createStatusDeliveryService.execute({status_delivery});
        await createStatusDeliveryService.execute({status_delivery: status_delivery1});
        const get_status = await getAllStatusDeliveryService.execute();
        await expect(get_status).toHaveLength(2);
    });

    it('should not be able to get all status of delivery non existent', async () => {
        const get_status = await getAllStatusDeliveryService.execute();
        await expect(get_status).toHaveLength(0);
    });
});