import {CategoryRepositoryInMemory} from "../repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "./CreateCategoryService";
import {UpdateActiveCategoryService} from "./UpdateActiveCategoryService";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let updateActiveCategoryService: UpdateActiveCategoryService;

describe('Update Active Category',  () => {
    beforeEach( () => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
        updateActiveCategoryService = new UpdateActiveCategoryService(categoryRepositoryInMemory);
    });

    it('should be able to update active category', async () => {
        await createCategoryService.execute({
            name: "Category Test",
            description: "Description of category test"
        });

        const category = await categoryRepositoryInMemory.findByName("Category Test");

        const id = category.id;

        const isActive = true;

        await updateActiveCategoryService.execute({ id, isActive });

        const active_category = await categoryRepositoryInMemory.findByName("Category Test");

        const active = active_category.isActive;

        expect(active).toEqual(true);
    });
});