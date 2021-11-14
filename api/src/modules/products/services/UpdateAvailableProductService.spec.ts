import {CategoryRepositoryInMemory} from "../../categories/repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "../../categories/services/CreateCategoryService";
import {ProductsRepositoryInMemory} from "../repositories/in-memory/ProductsRepositoryInMemory";
import {CreateProductService} from "./CreateProductService";
import {UpdateAvailableProductService} from "./UpdateAvailableProductService";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let updateAvailableProductsService: UpdateAvailableProductService;

describe('Update Available Product', () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductService = new CreateProductService(productsRepositoryInMemory);
        updateAvailableProductsService = new UpdateAvailableProductService(productsRepositoryInMemory);
    });

    it('should be able to update an product with available', async () => {
        await createCategoryService.execute({
            name: "Category Test",
            description: "description category test"
        });
        const category = await categoryRepositoryInMemory.findByName("Category Test");
        const category_id = category.id;
        await createProductService.execute({
            name: "Product Test",
            description: "Description product test",
            stock: 1,
            price: 25.00,
            category_id: category_id,
        });
        const product = await productsRepositoryInMemory.findByName("Product Test");
        const product_id = product.id;
        await expect(updateAvailableProductsService.execute({ product_id, available: true })).resolves.not.toThrow();
    });
});