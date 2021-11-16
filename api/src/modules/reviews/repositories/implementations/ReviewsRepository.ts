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
            relations: ['user', 'product']
        });
    }

    async findByProduct(product_id: string): Promise<Review[]> {
        return await this.repository.find({
            where: {product_id},
            relations: ['user', 'product']
        });
    }

    async findByUser(user_id: string): Promise<Review[]> {
        return await this.repository.find({
            where: {user_id},
            relations: ['user', 'product']
        });
    }

    async list(): Promise<Review[]> {
        return await this.repository.find({
            relations: ['user', 'product']
        });
    }

    async updateReview(id: string, description: string, rating: number): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ description: description, rating: rating })
            .where("id = :id")
            .setParameters({ id }).execute();
    }

    async findByUserAndProduct(user_id: string, product_id: string): Promise<Review> {
        return await this.repository.findOne({
            where: { user_id: user_id, product_id: product_id }
        });
    }

    async delete(id: string): Promise<any> {
        return await this.repository.delete(id);
    }

}

export { ReviewsRepository };