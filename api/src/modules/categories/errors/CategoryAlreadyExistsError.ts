import {AppError} from "../../../shared/errors/AppError";

class CategoryAlreadyExistsError extends AppError {
    constructor() {
        super("Category already exists");
    }
}

export { CategoryAlreadyExistsError };