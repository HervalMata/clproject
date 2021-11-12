import {CategoryRepositoryInMemory} from "../repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "./CreateCategoryService";
import {GetAllCategoriesService} from "./GetAllCategoriesService";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let getAllCategoriesService: GetAllCategoriesService;

describe('Get All Categories',  () => {
    beforeEach( () => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
        getAllCategoriesService = new GetAllCategoriesService(categoryRepositoryInMemory);
    });

    it('should be able to list all categories', async () => {
        await createCategoryService.execute({
            name: "Category Test",
            description: "Description of category test"
        });

        await createCategoryService.execute({
            name: "Category Test1",
            description: "Description of category test1"
        });

        const categories = await getAllCategoriesService.execute();

        expect(categories).toHaveLength(2);
    });

    it('should not be able to list categories empty', async () => {

        const categories = await getAllCategoriesService.execute();

        expect(categories).toHaveLength(0);
    });
});