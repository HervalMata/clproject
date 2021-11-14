import {CategoryRepositoryInMemory} from "../../categories/repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "../../categories/services/CreateCategoryService";
import {ProductsRepositoryInMemory} from "../repositories/in-memory/ProductsRepositoryInMemory";
import {CreateProductService} from "./CreateProductService";
import {CreateImagesProductService} from "./CreateImagesProductService";
import {ProductImagesRepositoryInMemory} from "../repositories/in-memory/ProductImagesRepositoryInMemory";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let productImagesRepositoryInMemory: ProductImagesRepositoryInMemory;
let createImagesProductService: CreateImagesProductService;

describe('Create Product Images',  () => {
    beforeEach(() =>  {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductService = new CreateProductService(productsRepositoryInMemory);
        createImagesProductService = new CreateImagesProductService(productImagesRepositoryInMemory);
    });

    it('should be able to create product images', async () => {
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
        const images_name = ["hbvfijbnjbnbngnjnb"];
        await expect(createImagesProductService.execute({ product_id, images_name })).resolves.not.toThrow();
    });
});