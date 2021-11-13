import {MaterialsRepositoryInMemory} from "../repositories/in-memory/MaterialsRepositoryInMemory";
import {CreateMaterialService} from "./CreateMaterialService";
import {MaterialAlreadyExistsError} from "../errors/MaterialAlreadyExistsError";

let materialsRepositoryInMemory: MaterialsRepositoryInMemory;
let createMaterialService: CreateMaterialService;

describe('Create Material',  () => {
    beforeEach( () => {
        materialsRepositoryInMemory = new MaterialsRepositoryInMemory();
        createMaterialService = new CreateMaterialService(materialsRepositoryInMemory);
    });

    it('should be able to create an material', async () => {
        await expect(createMaterialService.execute({ name: "Material Test" })).resolves.not.toThrow();
    });

    it('should not be able to create an material already existent', async () => {
        await createMaterialService.execute({ name: "Material Test" });
        await expect(createMaterialService.execute({ name: "Material Test" })).rejects.toBeInstanceOf(MaterialAlreadyExistsError);
    });
});