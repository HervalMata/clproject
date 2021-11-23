import {TypesDeliveryRepositoryInMemory} from "../repositories/in-memory/TypesDeliveryRepositoryInMemory";
import {CreateTypesDeliveryService} from "./CreateTypesDeliveryService";
import {GetTypesDeliveryService} from "./GetTypesDeliveryService";

let typesDeliveryRepositoryInMemory: TypesDeliveryRepositoryInMemory;
let createTypesDeliveryService: CreateTypesDeliveryService;
let getTypesDeliveryService: GetTypesDeliveryService;

describe('Get an types delivery', () => {
    beforeEach(() => {
        typesDeliveryRepositoryInMemory = new TypesDeliveryRepositoryInMemory();
        createTypesDeliveryService = new CreateTypesDeliveryService(typesDeliveryRepositoryInMemory);
        getTypesDeliveryService = new GetTypesDeliveryService(typesDeliveryRepositoryInMemory);
    });

    it('should be able to get an types of delivery', async () => {
        const type_delivery = "type test";
        await createTypesDeliveryService.execute({type_delivery});
        const types = await typesDeliveryRepositoryInMemory.findByTypeDelivery("type test");
        const id = types.id;
        const typesDelivery = await getTypesDeliveryService.execute({id});
        await expect(typesDelivery.type_delivery).toEqual("type test");
    });

    it('should not be able to get an types of delivery non existent', async () => {
        const id = "hntyjkklikluç";
        const typesDelivery = await getTypesDeliveryService.execute({id});
        await expect(typesDelivery).toBe(undefined);
    });
});