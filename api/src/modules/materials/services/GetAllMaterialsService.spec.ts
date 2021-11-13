import {MaterialsRepositoryInMemory} from "../repositories/in-memory/MaterialsRepositoryInMemory";
import {CreateMaterialService} from "./CreateMaterialService";
import {GetAllMaterialsService} from "./GetAllMaterialsService";

let materialsRepositoryInMemory: MaterialsRepositoryInMemory;
let createMaterialService: CreateMaterialService;
let getAllMaterialsService: GetAllMaterialsService;

describe('Get All Materials', () => {
    beforeEach( () => {
        materialsRepositoryInMemory = new MaterialsRepositoryInMemory();
        createMaterialService = new CreateMaterialService(materialsRepositoryInMemory);
        getAllMaterialsService = new GetAllMaterialsService(materialsRepositoryInMemory);
    });

    it('should be able to list all materials', async () => {
        await createMaterialService.execute({ name: "Material Test1" });
        await createMaterialService.execute({ name: "Material Test2" });

        const materials = await getAllMaterialsService.execute();
        expect(materials).toHaveLength(2);
    });

    it('should not be able to list all materials non existent', async () => {
        const materials = await getAllMaterialsService.execute();
        expect(materials).toHaveLength(0);
    });
});