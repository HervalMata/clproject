import {AppError} from "../../../shared/errors/AppError";

class ResetPasswordUserTokenInvalidError extends AppError{
    constructor() {
        super("Token Invalid");
    }
}

export { ResetPasswordUserTokenInvalidError };