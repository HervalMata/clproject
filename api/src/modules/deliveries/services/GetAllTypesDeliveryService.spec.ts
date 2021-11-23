import {TypesDeliveryRepositoryInMemory} from "../repositories/in-memory/TypesDeliveryRepositoryInMemory";
import {CreateTypesDeliveryService} from "./CreateTypesDeliveryService";
import {GetAllTypesDeliveryService} from "./GetAllTypesDeliveryService";

let typesDeliveryRepositoryInMemory: TypesDeliveryRepositoryInMemory;
let createTypesDeliveryService: CreateTypesDeliveryService;
let getAllTypesDeliveryService: GetAllTypesDeliveryService;

describe('Get All Types delivery', () => {
    beforeEach(() => {
        typesDeliveryRepositoryInMemory = new TypesDeliveryRepositoryInMemory();
        createTypesDeliveryService = new CreateTypesDeliveryService(typesDeliveryRepositoryInMemory);
        getAllTypesDeliveryService = new GetAllTypesDeliveryService(typesDeliveryRepositoryInMemory);
    });

    it('should be able to get all types of delivery', async () => {
        const type_delivery = "types test";
        const type_delivery1 = "types test1";
        await createTypesDeliveryService.execute({type_delivery});
        await createTypesDeliveryService.execute({type_delivery: type_delivery1});
        const get_types = await getAllTypesDeliveryService.execute();
        await expect(get_types).toHaveLength(2);
    });

    it('should not be able to get all types of delivery non existent', async () => {
        const get_types = await getAllTypesDeliveryService.execute();
        await expect(get_types).toHaveLength(0);
    });
});