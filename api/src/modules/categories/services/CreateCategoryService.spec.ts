import {CategoryRepositoryInMemory} from "../repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "./CreateCategoryService";
import {CategoryAlreadyExistsError} from "../errors/CategoryAlreadyExistsError";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;

describe('Create Category',  () => {
    beforeEach( () => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
    });

    it('should be ale to create an category', async () => {
        await expect(createCategoryService.execute({
            name: "Category Test",
            description: "Description of category test"
        })).resolves.not.toThrow();
    });

    it('should not be ale to create an category existent', async () => {
        await createCategoryService.execute({
            name: "Category Test",
            description: "Description of category test"
        });

        await expect(createCategoryService.execute({
            name: "Category Test",
            description: "Description of category test"
        })).rejects.toBeInstanceOf(CategoryAlreadyExistsError);
    });
});