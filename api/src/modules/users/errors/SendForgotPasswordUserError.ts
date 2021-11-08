import {AppError} from "../../../shared/errors/AppError";

class SendForgotPasswordUserError extends AppError {
    constructor() {
        super("User not found.");
    }
}

export { SendForgotPasswordUserError };