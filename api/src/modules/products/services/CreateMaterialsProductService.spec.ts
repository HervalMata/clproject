import {ProductsRepositoryInMemory} from "../repositories/in-memory/ProductsRepositoryInMemory";
import {CategoryRepositoryInMemory} from "../../categories/repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "../../categories/services/CreateCategoryService";
import {CreateProductService} from "./CreateProductService";
import {ProductNotExistsError} from "../errors/ProductNotExistsError";
import {CreateMaterialsProductService} from "./CreateMaterialsProductService";
import {MaterialsRepositoryInMemory} from "../../materials/repositories/in-memory/MaterialsRepositoryInMemory";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let materialsRepositoryInMemory: MaterialsRepositoryInMemory;
let createMaterialsProductService: CreateMaterialsProductService;

describe('Create Product Materials',  () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        materialsRepositoryInMemory = new MaterialsRepositoryInMemory();
        createProductService = new CreateProductService(productsRepositoryInMemory);
        createMaterialsProductService = new CreateMaterialsProductService(
            productsRepositoryInMemory, materialsRepositoryInMemory
        );
    });

    it('should be able to create materials of the product', async () => {
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

        await materialsRepositoryInMemory.create({
            name: "Material Test"
        });

        const material = await materialsRepositoryInMemory.findByName("Material Test");
        const material_id  = [material.id];

        const materialsProducts = await createMaterialsProductService.execute({
            product_id: product_id, materials_id: material_id
        });

        expect(materialsProducts).toHaveProperty("materials");
        expect(materialsProducts.materials.length).toBe(1);
    });

    it('should not be able to create materials of the non existent product', async () => {
        const product_id = "nvbofnbgjnbrogmnoirtnbnm";

        await materialsRepositoryInMemory.create({
            name: "Material Test"
        });

        const material = await materialsRepositoryInMemory.findByName("Material Test");
        const material_id  = [material.id];

        await expect(createMaterialsProductService.execute({
            product_id: product_id, materials_id: material_id
        })).rejects.toBeInstanceOf(ProductNotExistsError);
    });
});