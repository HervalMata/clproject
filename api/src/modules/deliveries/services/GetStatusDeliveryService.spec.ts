import {StatusDeliveryRepositoryInMemory} from "../repositories/in-memory/StatusDeliveryRepositoryInMemory";
import {CreateStatusDeliveryService} from "./CreateStatusDeliveryService";
import {GetStatusDeliveryService} from "./GetStatusDeliveryService";

let statusDeliveryRepositoryInMemory: StatusDeliveryRepositoryInMemory;
let createStatusDeliveryService: CreateStatusDeliveryService;
let getStatusDeliveryService: GetStatusDeliveryService;

describe('Get an status delivery', () => {
    beforeEach(() => {
        statusDeliveryRepositoryInMemory = new StatusDeliveryRepositoryInMemory();
        createStatusDeliveryService = new CreateStatusDeliveryService(statusDeliveryRepositoryInMemory);
        getStatusDeliveryService = new GetStatusDeliveryService(statusDeliveryRepositoryInMemory);
    });

    it('should be able to get an status of delivery', async () => {
        const status_delivery = "status test";
        await createStatusDeliveryService.execute({status_delivery});
        const status = await statusDeliveryRepositoryInMemory.findByStatusDelivery("status test");
        const id = status.id;
        const statusDelivery = await getStatusDeliveryService.execute({id});
        await expect(statusDelivery.status_delivery).toEqual("status test");
    });

    it('should not be able to get an status of delivery non existent', async () => {
        const id = "hntyjkklikluç";
        const statusDelivery = await getStatusDeliveryService.execute({id});
        await expect(statusDelivery).toBe(undefined);
    });
});