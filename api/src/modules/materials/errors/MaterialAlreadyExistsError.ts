import {AppError} from "../../../shared/errors/AppError";

class MaterialAlreadyExistsError extends AppError {
    constructor() {
        super("Material already exists");
    }
}

export { MaterialAlreadyExistsError };