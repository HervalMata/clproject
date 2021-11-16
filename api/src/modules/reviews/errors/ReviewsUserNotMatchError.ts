import {AppError} from "../../../shared/errors/AppError";

class ReviewsUserNotMatchError extends AppError {
    constructor() {
        super("Review User Not Authorized");
    }
}

export { ReviewsUserNotMatchError };