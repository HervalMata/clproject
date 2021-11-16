import {UsersRepositoryInMemory} from "../../users/repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "../../users/services/CreateUserService";
import {CategoryRepositoryInMemory} from "../../categories/repositories/in-memory/CategoryRepositoryInMemory";
import {CreateCategoryService} from "../../categories/services/CreateCategoryService";
import {ProductsRepositoryInMemory} from "../../products/repositories/in-memory/ProductsRepositoryInMemory";
import {CreateProductService} from "../../products/services/CreateProductService";
import {ReviewsRepositoryInMemory} from "../repositories/in-memory/ReviewsRepositoryInMemory";
import {CreateReviewService} from "./CreateReviewService";
import {GetReviewsByProductService} from "./GetReviewsByProductService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let reviewsRepositoryInMemory: ReviewsRepositoryInMemory;
let createReviewService: CreateReviewService;
let getReviewsByProductService: GetReviewsByProductService;

describe('Get Products Reviews',  () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepositoryInMemory);
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductService = new CreateProductService(productsRepositoryInMemory);
        reviewsRepositoryInMemory = new ReviewsRepositoryInMemory();
        createReviewService = new CreateReviewService(reviewsRepositoryInMemory);
        getReviewsByProductService = new GetReviewsByProductService(reviewsRepositoryInMemory);
    });

    it('should be able to get products reviews', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });
        const user_id = user.id;
        const user1 = await createUserService.execute({
            name: "User Test1",
            email: "user1@test.com",
            password: "1234"
        });
        const user1_id = user1.id;
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
        const description = "Some description";
        const rating = 5;
        await createReviewService.execute({ user_id, product_id, description, rating});
        await createReviewService.execute({ user_id: user1_id, product_id, description, rating});
        const product_reviews = await getReviewsByProductService.execute({product_id});
        expect(product_reviews).toHaveLength(2);
    });

    it('should not be able to get users reviews non existent', async () => {
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
        const product_reviews = await getReviewsByProductService.execute({product_id});
        expect(product_reviews).toHaveLength(0);
    });
});