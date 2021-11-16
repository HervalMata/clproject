import {UsersRepositoryInMemory} from "../../users/repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "../../users/services/CreateUserService";
import {CategoryRepositoryInMemory} from "../../categories/repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "../../categories/services/CreateCategoryService";
import {ProductsRepositoryInMemory} from "../../products/repositories/in-memory/ProductsRepositoryInMemory";
import {CreateProductService} from "../../products/services/CreateProductService";
import {ReviewsRepositoryInMemory} from "../repositories/in-memory/ReviewsRepositoryInMemory";
import {CreateReviewService} from "./CreateReviewService";
import {GetReviewsByUserService} from "./GetReviewsByUserService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let reviewsRepositoryInMemory: ReviewsRepositoryInMemory;
let createReviewService: CreateReviewService;
let getReviewsByUserService: GetReviewsByUserService;

describe('Get Users Reviews',  () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductService = new CreateProductService(productsRepositoryInMemory);
        reviewsRepositoryInMemory = new ReviewsRepositoryInMemory();
        createReviewService = new CreateReviewService(reviewsRepositoryInMemory);
        getReviewsByUserService = new GetReviewsByUserService(reviewsRepositoryInMemory);
    });

    it('should be able to get users reviews', async () => {
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
        const description = "Some description";
        const rating = 5;
        await createReviewService.execute({ user_id, product_id, description, rating});
        await createReviewService.execute({ user_id, product_id: product1_id, description, rating});
        const user_reviews = await getReviewsByUserService.execute({user_id});
        expect(user_reviews).toHaveLength(2);
    });

    it('should not be able to get users reviews non existent', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });
        const user_id = user.id;
        const user_reviews = await getReviewsByUserService.execute({user_id});
        expect(user_reviews).toHaveLength(0);
    });
});