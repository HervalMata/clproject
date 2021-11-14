import {CategoryRepositoryInMemory} from "../../categories/repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "../../categories/services/CreateCategoryService";
import {ProductsRepositoryInMemory} from "../repositories/in-memory/ProductsRepositoryInMemory";
import {CreateProductService} from "./CreateProductService";
import {UpdateStockProductService} from "./UpdateStockProductService";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let updateStockProductsService: UpdateStockProductService;

describe('Update Stock Product', () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductService = new CreateProductService(productsRepositoryInMemory);
        updateStockProductsService = new UpdateStockProductService(productsRepositoryInMemory);
    });

    it('should be able to update stock of the product', async () => {
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
        await expect(updateStockProductsService.execute({ product_id, stock: 2 })).resolves.not.toThrow();
    });
});