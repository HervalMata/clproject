import {CategoryRepositoryInMemory} from "../repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "./CreateCategoryService";
import { GetCategoryService } from "./GetCategoryService";
import {GetAvailableCategoriesService} from "./GetAvailableCategoriesService";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let getAvailableCategoriesService: GetAvailableCategoriesService;

describe('Get Category',  () => {
    beforeEach( () => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
        getAvailableCategoriesService = new GetAvailableCategoriesService(categoryRepositoryInMemory);
    });

    it('should be able to list available categories', async () => {
        await createCategoryService.execute({
            name: "Category Test",
            description: "Description of category test"
        });

        const category = await categoryRepositoryInMemory.findByName("Category Test");

        const id = category.id;

        await categoryRepositoryInMemory.activate(id,  true);

        const available = await getAvailableCategoriesService.execute();

        expect(available).toHaveLength(1);
    });

    it('should not be able to list available categories non existent', async () => {

        const available = await getAvailableCategoriesService.execute();

        expect(available).toHaveLength(0);
    });
});