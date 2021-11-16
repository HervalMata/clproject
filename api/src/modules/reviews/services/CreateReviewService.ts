import {inject, injectable} from "tsyringe";
import {IReviewsRepository} from "../repositories/IReviewsRepository";
import {ICreateReviewsDTO} from "../dtos/ICreateReviewsDTO";

@injectable()
class CreateReviewService {

    constructor(
        @inject("ReviewsRepository")
        private reviewsRepository: IReviewsRepository
    ) {}

    async execute({ user_id, product_id, description, rating }: ICreateReviewsDTO): Promise<void> {
        await this.reviewsRepository.create({ user_id, product_id, description, rating });
    }
}

export { CreateReviewService };