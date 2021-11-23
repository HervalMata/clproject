import {TypesDeliveryRepositoryInMemory} from "../repositories/in-memory/TypesDeliveryRepositoryInMemory";
import {CreateTypesDeliveryService} from "./CreateTypesDeliveryService";
import {TypeDeliveryExistentError} from "../errors/TypeDeliveryExistentError";

let typesDeliveryRepositoryInMemory: TypesDeliveryRepositoryInMemory;
let createTypesDeliveryService: CreateTypesDeliveryService;

describe('Create Types of Delivery', () => {
    beforeEach(() => {
        typesDeliveryRepositoryInMemory = new TypesDeliveryRepositoryInMemory();
        createTypesDeliveryService = new CreateTypesDeliveryService(typesDeliveryRepositoryInMemory);
    });

    it('should be able to create an types of delivery', async () => {
        const type_delivery = "type test";
        await expect(createTypesDeliveryService.execute({type_delivery})).resolves.not.toThrow();
    });

    it('should not be able to create an types of delivery existent', async () => {
        const type_delivery = "types test";
        await createTypesDeliveryService.execute({type_delivery});
        await expect(createTypesDeliveryService.execute({type_delivery})).rejects.toBeInstanceOf(TypeDeliveryExistentError);
    });
});