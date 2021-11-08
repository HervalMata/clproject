import {AppError} from "../../../shared/errors/AppError";

class RefreshTokenUserError extends AppError {
    constructor() {
        super("Refresh token does not exists!");
    }
}

export { RefreshTokenUserError };