import {StatusOrderRepositoryInMemory} from "../repositories/in-memory/StatusOrderRepositoryInMemory";
import {CreateStatusOrderService} from "./CreateStatusOrderService";
import {StatusOrderExistentError} from "../errors/StatusOrderExistentError";

let statusOrderRepositoryInMemory: StatusOrderRepositoryInMemory;
let createStatusOrderService: CreateStatusOrderService;

describe('Create Status of Order', () => {
    beforeEach(() => {
        statusOrderRepositoryInMemory = new StatusOrderRepositoryInMemory();
        createStatusOrderService = new CreateStatusOrderService(statusOrderRepositoryInMemory);
    });

    it('should be able to create an status of order', async () => {
        const status_order = "status test";
        await expect(createStatusOrderService.execute({status_order})).resolves.not.toThrow();
    });

    it('should not be able to create an status of order existent', async () => {
        const status_order = "status test";
        await createStatusOrderService.execute({status_order});
        await expect(createStatusOrderService.execute({status_order})).rejects.toBeInstanceOf(StatusOrderExistentError);
    });
});