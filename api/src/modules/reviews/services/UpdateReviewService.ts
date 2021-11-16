import {inject, injectable} from "tsyringe";
import {IReviewsRepository} from "../repositories/IReviewsRepository";
import {ReviewsUserNotMatchError} from "../errors/ReviewsUserNotMatchError";

interface IRequest {
    id: string;
    user_id: string;
    description?: string;
    rating?: number;
}

@injectable()
class UpdateReviewService {

    constructor(
        @inject("ReviewsRepository")
        private reviewsRepository: IReviewsRepository
    ) {}

    async execute({ id, user_id, description, rating }: IRequest): Promise<void> {
        const review = await this.reviewsRepository.findById(id);
        if (review.user_id !== user_id) {
            throw new ReviewsUserNotMatchError();
        }
        await this.reviewsRepository.updateReview(id, description, rating);
    }
}

export { UpdateReviewService };