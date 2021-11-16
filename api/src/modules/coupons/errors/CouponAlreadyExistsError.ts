import {AppError} from "../../../shared/errors/AppError";

class CouponAlreadyExistsError extends AppError {
    constructor() {
        super("Coupon already exists");
    }
}

export { CouponAlreadyExistsError };