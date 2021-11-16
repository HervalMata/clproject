import {UsersRepositoryInMemory} from "../../users/repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "../../users/services/CreateUserService";
import {CategoryRepositoryInMemory} from "../../categories/repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "../../categories/services/CreateCategoryService";
import {ProductsRepositoryInMemory} from "../../products/repositories/in-memory/ProductsRepositoryInMemory";
import {CreateProductService} from "../../products/services/CreateProductService";
import {WishlistsRepositoryInMemory} from "../repositories/in-memory/WishlistsRepositoryInMemory";
import {CreateWishlistService} from "./CreateWishlistService";
import {GetWishlistByUserService} from "./GetWishlistByUserService";
import {Wishlist} from "../entities/Wishlist";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let wishlistsRepositoryInMemory: WishlistsRepositoryInMemory;
let createWishlistService: CreateWishlistService;
let getWishlistByUserService: GetWishlistByUserService;

describe('Get User Wishlist', () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductService = new CreateProductService(productsRepositoryInMemory);
        wishlistsRepositoryInMemory = new WishlistsRepositoryInMemory();
        createWishlistService = new CreateWishlistService(wishlistsRepositoryInMemory, productsRepositoryInMemory);
        getWishlistByUserService = new GetWishlistByUserService(wishlistsRepositoryInMemory);
    });

    it('should be able to get user wishlist', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });
        const user_id = user.id;
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
        await createProductService.execute({
            name: "Product Test1",
            description: "Description product test",
            stock: 1,
            price: 25.00,
            category_id: category_id,
        });
        const product1 = await productsRepositoryInMemory.findByName("Product Test1");
        const product1_id = product1.id;
        const products_id = [product_id, product1_id];
        await createWishlistService.execute({ user_id, products_id });
        const wishlist = await getWishlistByUserService.execute({user_id});
        expect(wishlist).toBeInstanceOf(Wishlist);
    });

    it('should not be able to get user wishlist non existent', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });
        const user_id = user.id;
        const wishlist = await getWishlistByUserService.execute({user_id});
        expect(wishlist).not.toBeInstanceOf(Wishlist);
    });
});