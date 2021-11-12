import {ColorsRepositoryInMemory} from "../repositories/in-memory/ColorsRepositoryInMemory";
import {CreateColorService} from "./CreateColorService";
import {GetColorService} from "./GetColorService";
import {Color} from "../entities/Color";

let colorsRepositoryInMemory: ColorsRepositoryInMemory;
let createColorService: CreateColorService;
let getColorService: GetColorService;

describe('Get Color',  () => {
    beforeEach( () => {
        colorsRepositoryInMemory = new ColorsRepositoryInMemory();
        createColorService = new CreateColorService(colorsRepositoryInMemory);
        getColorService = new GetColorService(colorsRepositoryInMemory);
    });

    it('should be able to get an color', async () => {
        await createColorService.execute({ name: "Color Test" });
        const color = await colorsRepositoryInMemory.findByName("Color Test");
        const id = color.id;
        await expect(await getColorService.execute({id})).toBeInstanceOf(Color);
    });

    it('should not be able to get an color non existent', async () => {
        const id = null;
        await expect(await getColorService.execute({id})).not.toBeInstanceOf(Color);
    });
});