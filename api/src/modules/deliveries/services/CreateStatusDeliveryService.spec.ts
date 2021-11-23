import {StatusDeliveryRepositoryInMemory} from "../repositories/in-memory/StatusDeliveryRepositoryInMemory";
import {CreateStatusDeliveryService} from "./CreateStatusDeliveryService";
import {StatusDeliveryExistentError} from "../errors/StatusDeliveryExistentError";

let statusDeliveryRepositoryInMemory: StatusDeliveryRepositoryInMemory;
let createStatusDeliveryService: CreateStatusDeliveryService;

describe('Create Status of Delivery', () => {
    beforeEach(() => {
        statusDeliveryRepositoryInMemory = new StatusDeliveryRepositoryInMemory();
        createStatusDeliveryService = new CreateStatusDeliveryService(statusDeliveryRepositoryInMemory);
    });

    it('should be able to create an status order', async () => {
        const status_delivery = "status test";
        await expect(createStatusDeliveryService.execute({status_delivery})).resolves.not.toThrow();
    });

    it('should not be able to create an status order existent', async () => {
        const status_delivery = "status test";
        await createStatusDeliveryService.execute({status_delivery});
        await expect(createStatusDeliveryService.execute({status_delivery})).rejects.toBeInstanceOf(StatusDeliveryExistentError);
    });
});