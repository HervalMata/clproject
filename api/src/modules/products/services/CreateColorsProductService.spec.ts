import {ProductsRepositoryInMemory} from "../repositories/in-memory/ProductsRepositoryInMemory";
import {ColorsRepositoryInMemory} from "../../colors/repositories/in-memory/ColorsRepositoryInMemory";
import {CreateColorsProductService} from "./CreateColorsProductService";
import {CategoryRepositoryInMemory} from "../../categories/repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "../../categories/services/CreateCategoryService";
import {CreateProductService} from "./CreateProductService";
import {ProductNotExistsError} from "../errors/ProductNotExistsError";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let colorsRepositoryInMemory: ColorsRepositoryInMemory;
let createColorsProductService: CreateColorsProductService;

describe('Create Product Colors',  () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        colorsRepositoryInMemory = new ColorsRepositoryInMemory();
        createProductService = new CreateProductService(productsRepositoryInMemory);
        createColorsProductService = new CreateColorsProductService(
            productsRepositoryInMemory, colorsRepositoryInMemory
        );
    });

    it('should be able to create colors of the product', async () => {
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

        await colorsRepositoryInMemory.create({
            name: "Color Test"
        });

        const color = await colorsRepositoryInMemory.findByName("Color Test");
        const color_id  = [color.id];

        const colorsProducts = await createColorsProductService.execute({
            product_id: product_id, colors_id: color_id
        });

        expect(colorsProducts).toHaveProperty("colors");
        expect(colorsProducts.colors.length).toBe(1);
    });

    it('should not be able to create colors of the non existent product', async () => {
        const product_id = "nvbofnbgjnbrogmnoirtnbnm";

        await colorsRepositoryInMemory.create({
            name: "Color Test"
        });

        const color = await colorsRepositoryInMemory.findByName("Color Test");
        const color_id  = [color.id];

        await expect(createColorsProductService.execute({
            product_id: product_id, colors_id: color_id
        })).rejects.toBeInstanceOf(ProductNotExistsError);
    });
});