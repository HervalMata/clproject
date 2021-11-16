import {IReviewsRepository} from "../IReviewsRepository";
import {ICreateReviewsDTO} from "../../dtos/ICreateReviewsDTO";
import {Review} from "../../entities/Review";

class ReviewsRepositoryInMemory implements IReviewsRepository {
    reviews: Review[] = [];

    async create({ user_id, product_id, description, rating }: ICreateReviewsDTO): Promise<void> {
        const review = new Review();
        Object.assign(review, {
            user_id, product_id, description, rating
        });
        this.reviews.push(review);
    }

    async findById(id: string): Promise<Review> {
        return this.reviews.find((review) => review.id === id);
    }

    async findByProduct(product_id: string): Promise<Review[]> {
        return this.reviews.filter((review) => review.product_id === product_id);
    }

    async findByUser(user_id: string): Promise<Review[]> {
        return this.reviews.filter((review) => review.user_id === user_id);
    }

    async list(): Promise<Review[]> {
        return this.reviews;
    }

    async updateReview(id: string, description: string, rating: number): Promise<void> {
        const reviewIndex = this.reviews.findIndex((review) => review.id === id);
        this.reviews[reviewIndex].description = description;
        this.reviews[reviewIndex].rating = rating;
    }

}

export { ReviewsRepositoryInMemory };