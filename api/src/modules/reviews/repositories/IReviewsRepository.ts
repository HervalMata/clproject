import {ICreateReviewsDTO} from "../dtos/ICreateReviewsDTO";
import {Review} from "../entities/Review";

interface IReviewsRepository {
    create(data: ICreateReviewsDTO): Promise<void>;
    list(): Promise<Review[]>;
    findByProduct(product_id: string): Promise<Review[]>;
    findByUser(user_id: string): Promise<Review[]>;
    findById(id: string): Promise<Review>;
    updateReview(id: string, description: string, rating: number): Promise<void>;
    findByUserAndProduct(user_id: string, product_id: string): Promise<Review>;
    delete(id: string): Promise<any>;
}

export { IReviewsRepository };