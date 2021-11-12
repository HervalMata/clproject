import {ColorsRepositoryInMemory} from "../repositories/in-memory/ColorsRepositoryInMemory";
import {CreateColorService} from "./CreateColorService";
import {ColorAlreadyExistsError} from "../errors/ColorAlreadyExistsError";

let colorsRepositoryInMemory: ColorsRepositoryInMemory;
let createColorService: CreateColorService;

describe('Create Color',  () => {
    beforeEach( () => {
        colorsRepositoryInMemory = new ColorsRepositoryInMemory();
        createColorService = new CreateColorService(colorsRepositoryInMemory);
    });

    it('should be able to create an color', async () => {
        await expect(createColorService.execute({ name: "Color Test" })).resolves.not.toThrow();
    });

    it('should not be able to create an color already existent', async () => {
        await createColorService.execute({ name: "Color Test" });
        await expect(createColorService.execute({ name: "Color Test" })).rejects.toBeInstanceOf(ColorAlreadyExistsError);
    });
});