import {AppError} from "../../../shared/errors/AppError";

class StatusPaymentExistentError extends AppError {
    constructor() {
        super("Status of payment already exists");
    }
}

export {StatusPaymentExistentError};