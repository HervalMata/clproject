import {inject, injectable} from "tsyringe";
import {IReviewsRepository} from "../repositories/IReviewsRepository";

interface IRequest {
    id: string;
    description: string;
    rating: number;
}

@injectable()
class UpdateReviewService {

    constructor(
        @inject("ReviewsRepository")
        private reviewsRepository: IReviewsRepository
    ) {}

    async execute({ id, description, rating }: IRequest): Promise<void> {
        await this.reviewsRepository.updateReview(id, description, rating);
    }
}

export { UpdateReviewService };