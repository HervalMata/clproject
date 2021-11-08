import {AppError} from "../../../shared/errors/AppError";

class UserAlreadyExistsError extends AppError {
    constructor() {
        super("User already exists");
    }
}

export { UserAlreadyExistsError };