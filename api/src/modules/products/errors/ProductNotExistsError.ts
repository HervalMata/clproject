import {AppError} from "../../../shared/errors/AppError";

class ProductNotExistsError extends AppError {
    constructor() {
        super("Product does not exists!");
    }
}

export { ProductNotExistsError };