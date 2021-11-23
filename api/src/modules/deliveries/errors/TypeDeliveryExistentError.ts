import {AppError} from "../../../shared/errors/AppError";

class TypeDeliveryExistentError extends AppError {
    constructor() {
        super("Type of delivery already exists");
    }
}

export {TypeDeliveryExistentError};