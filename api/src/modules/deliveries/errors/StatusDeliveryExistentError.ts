import {AppError} from "../../../shared/errors/AppError";

class StatusDeliveryExistentError extends AppError {
    constructor() {
        super("Status of delivery already exists");
    }
}

export {StatusDeliveryExistentError};