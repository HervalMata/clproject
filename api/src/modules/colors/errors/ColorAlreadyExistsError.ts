import {AppError} from "../../../shared/errors/AppError";

class ColorAlreadyExistsError extends AppError{
    constructor() {
        super("Color already exists");
    }
}

export { ColorAlreadyExistsError}