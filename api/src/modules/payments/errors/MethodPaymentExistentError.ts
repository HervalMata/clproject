import {AppError} from "../../../shared/errors/AppError";

class MethodPaymentExistentError extends AppError {
    constructor() {
        super("Method of payment already exists");
    }
}

export {MethodPaymentExistentError};