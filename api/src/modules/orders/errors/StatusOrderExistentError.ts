import {AppError} from "../../../shared/errors/AppError";

class StatusOrderExistentError extends AppError {
    constructor() {
        super("Status of order already exists");
    }
}

export {StatusOrderExistentError};