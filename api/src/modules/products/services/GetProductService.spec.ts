import {CategoryRepositoryInMemory} from "../../categories/repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "../../categories/services/CreateCategoryService";
import {ProductsRepositoryInMemory} from "../repositories/in-memory/ProductsRepositoryInMemory";
import {CreateProductService} from "./CreateProductService";
import {GetProductService} from "./GetProductService";
import {Product} from "../entities/Product";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let getProductService: GetProductService;

describe('Get Product', () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductService = new CreateProductService(productsRepositoryInMemory);
        getProductService = new GetProductService(productsRepositoryInMemory);
    });

    it('should be able to get an product', async () => {
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
        const id = product.id;
        const get_product = await getProductService.execute({id});
        await expect(get_product).toBeInstanceOf(Product);
    });

    it('should not be able to get an product non existent', async () => {
        const id = null;
        const get_product = await getProductService.execute({id});
        await expect(get_product).not.toBeInstanceOf(Product);
    });
});