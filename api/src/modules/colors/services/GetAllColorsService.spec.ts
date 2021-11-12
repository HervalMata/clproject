import {ColorsRepositoryInMemory} from "../repositories/in-memory/ColorsRepositoryInMemory";
import {CreateColorService} from "./CreateColorService";
import {GetAllColorsService} from "./GetAllColorsService";

let colorsRepositoryInMemory: ColorsRepositoryInMemory;
let createColorService: CreateColorService;
let getAllColorsService: GetAllColorsService;

describe('Get All Colors',  () => {
    beforeEach( () => {
        colorsRepositoryInMemory = new ColorsRepositoryInMemory();
        createColorService = new CreateColorService(colorsRepositoryInMemory);
        getAllColorsService = new GetAllColorsService(colorsRepositoryInMemory);
    });

    it('should be able to list all colors', async () => {
        await createColorService.execute({ name: "Color Test1" });
        await createColorService.execute({ name: "Color Test2" });
        const colors = await getAllColorsService.execute();
        expect(colors).toHaveLength(2);
    });

    it('should not be able to list colors non existent', async () => {
        const colors = await getAllColorsService.execute();
        expect(colors).toHaveLength(0);
    });
});