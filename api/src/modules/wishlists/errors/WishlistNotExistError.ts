import {AppError} from "../../../shared/errors/AppError";

class WishlistNotExistError extends AppError {
    constructor() {
        super("Wishlist not exists");
    }
}

export { WishlistNotExistError };