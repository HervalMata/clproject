import {IReviewsRepository} from "../IReviewsRepository";
import {ICreateReviewsDTO} from "../../dtos/ICreateReviewsDTO";
import {Review} from "../../entities/Review";
import {getRepository, Repository} from "typeorm";

class ReviewsRepository implements IReviewsRepository {
    private repository: Repository<Review>;

    constructor() {
        this.repository = getRepository(Review);
    }

    async create(data: ICreateReviewsDTO): Promise<void> {
        const { id, user_id, product_id, description, rating } = data;
        const review = this.repository.create({
            id, user_id, product_id, description, rating
        });
        await this.repository.save(review);
    }

    async findById(id: string): Promise<Review> {
        return await this.repository.findOne({
            where: { id },
            relations: ['users', 'products']
        });
    }

    async findByProduct(product_id: string): Promise<Review[]> {
        return await this.repository.find({
            where: {product_id},
            relations: ['users', 'products']
        });
    }

    async findByUser(user_id: string): Promise<Review[]> {
        return await this.repository.find({
            where: {user_id},
            relations: ['users', 'products']
        });
    }

    async list(): Promise<Review[]> {
        return await this.repository.find({
            relations: ['users', 'products']
        });
    }

}

export { ReviewsRepository };