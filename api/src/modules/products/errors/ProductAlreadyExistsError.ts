import {AppError} from "../../../shared/errors/AppError";

class ProductAlreadyExistsError extends AppError {
    constructor() {
        super("Product already exists");
    }
}

export { ProductAlreadyExistsError };