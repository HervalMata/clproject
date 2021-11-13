import {MaterialsRepositoryInMemory} from "../repositories/in-memory/MaterialsRepositoryInMemory";
import {CreateMaterialService} from "./CreateMaterialService";
import {GetMaterialService} from "./GetMaterialService";
import {Material} from "../entities/Material";

let materialsRepositoryInMemory: MaterialsRepositoryInMemory;
let createMaterialService: CreateMaterialService;
let getMaterialService: GetMaterialService;

describe('Get An Material', () => {
    beforeEach(() => {
        materialsRepositoryInMemory = new MaterialsRepositoryInMemory();
        createMaterialService = new CreateMaterialService(materialsRepositoryInMemory);
        getMaterialService = new GetMaterialService(materialsRepositoryInMemory);
    });

    it('should be able to get an material', async () => {
        await createMaterialService.execute({ name: "Material Test" });
        const material = await materialsRepositoryInMemory.findByName("Material Test");
        const id = material.id;
        await expect(await getMaterialService.execute({id})).toBeInstanceOf(Material);
    });

    it('should not be able to get an material non existent', async () => {
        const id = null;
        await expect(await getMaterialService.execute({id})).not.toBeInstanceOf(Material);
    });
});