import {CategoryRepositoryInMemory} from "../repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "./CreateCategoryService";
import {GetCategoryService} from "./GetCategoryService";
import {Category} from "../entities/Category";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let getCategoryService: GetCategoryService;

describe('Get Category',  () => {
    beforeEach(() =>{
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
        getCategoryService = new GetCategoryService(categoryRepositoryInMemory);
    });

    it('Should be able to get an category', async () => {
        await createCategoryService.execute({
            name: "Category Test",
            description: "Description of category test"
        });

        const category = await categoryRepositoryInMemory.findByName("Category Test");

        const id = category.id;

        const getCategory = await getCategoryService.execute({id});

        expect(getCategory).toBeInstanceOf(Category);
    });

    it('Should not be able to get an category', async () => {

        const id = null;

        const getCategory = await getCategoryService.execute({id});

        expect(getCategory).not.toBeInstanceOf(Category);
    });
});