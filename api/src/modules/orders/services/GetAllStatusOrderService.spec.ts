import {StatusOrderRepositoryInMemory} from "../repositories/in-memory/StatusOrderRepositoryInMemory";
import {CreateStatusOrderService} from "./CreateStatusOrderService";
import {GetAllStatusOrderService} from "./GetAllStatusOrderService";

let statusOrderRepositoryInMemory: StatusOrderRepositoryInMemory;
let createStatusOrderService: CreateStatusOrderService;
let getAllStatusOrderService: GetAllStatusOrderService;

describe('Get All Status order', () => {
    beforeEach(() => {
        statusOrderRepositoryInMemory = new StatusOrderRepositoryInMemory();
        createStatusOrderService = new CreateStatusOrderService(statusOrderRepositoryInMemory);
        getAllStatusOrderService = new GetAllStatusOrderService(statusOrderRepositoryInMemory);
    });

    it('should be able to get all status of order', async () => {
        const status_order = "status test";
        const status_order1 = "status test1";
        await createStatusOrderService.execute({status_order});
        await createStatusOrderService.execute({status_order: status_order1});
        const get_status = await getAllStatusOrderService.execute();
        await expect(get_status).toHaveLength(2);
    });

    it('should not be able to get all status of order non existent', async () => {
        const get_status = await getAllStatusOrderService.execute();
        await expect(get_status).toHaveLength(0);
    });
});