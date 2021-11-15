import {CategoryRepositoryInMemory} from "../../categories/repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "../../categories/services/CreateCategoryService";
import {ProductsRepositoryInMemory} from "../repositories/in-memory/ProductsRepositoryInMemory";
import {CreateProductService} from "./CreateProductService";
import {GetOfferProductsService} from "./GetOfferProductsService";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let getOfferProductsService: GetOfferProductsService;

describe('Get Available Products', () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductService = new CreateProductService(productsRepositoryInMemory);
        getOfferProductsService = new GetOfferProductsService(productsRepositoryInMemory);
    });

    it('should be able to get offered products', async () => {
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
        await createProductService.execute({
            name: "Product Test1",
            description: "Description product test",
            stock: 1,
            price: 25.00,
            category_id: category_id,
        });
        const product1 = await productsRepositoryInMemory.findByName("Product Test");
        const id1 = product1.id;

        await productsRepositoryInMemory.updateOffer(id1, true, 20.00);
        await productsRepositoryInMemory.updateAvailability(id1, true);

        const product2 = await productsRepositoryInMemory.findByName("Product Test1");

        const id2 = product2.id;

        await productsRepositoryInMemory.updateOffer(id2, true, 18.00);
        await productsRepositoryInMemory.updateAvailability(id2, true);

        await expect(await getOfferProductsService.execute({ is_offer: true })).toHaveLength(2);
    });

    it('should not be able to get non available products', async () => {
        await expect(await getOfferProductsService.execute({is_offer: true})).toHaveLength(0);
    });
});