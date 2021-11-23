import {StatusOrderRepositoryInMemory} from "../repositories/in-memory/StatusOrderRepositoryInMemory";
import {CreateStatusOrderService} from "./CreateStatusOrderService";
import {GetStatusOrderService} from "./GetStatusOrderService";

let statusOrderRepositoryInMemory: StatusOrderRepositoryInMemory;
let createStatusOrderService: CreateStatusOrderService;
let getStatusOrderService: GetStatusOrderService;

describe('Get an status order', () => {
    beforeEach(() => {
        statusOrderRepositoryInMemory = new StatusOrderRepositoryInMemory();
        createStatusOrderService = new CreateStatusOrderService(statusOrderRepositoryInMemory);
        getStatusOrderService = new GetStatusOrderService(statusOrderRepositoryInMemory);
    });

    it('should be able to get an status of order', async () => {
        const status_order = "status test";
        await createStatusOrderService.execute({status_order});
        const status = await statusOrderRepositoryInMemory.findByStatusOrder("status test");
        const id = status.id;
        const statusOrder = await getStatusOrderService.execute({id});
        await expect(statusOrder.status_order).toEqual("status test");
    });

    it('should not be able to get an status of order non existent', async () => {
        const id = "hntyjkklikluç";
        const statusOrder = await getStatusOrderService.execute({id});
        await expect(statusOrder).toBe(undefined);
    });
});