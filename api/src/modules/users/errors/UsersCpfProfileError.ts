import {AppError} from "../../../shared/errors/AppError";

class UsersCpfProfileError extends AppError {
    constructor() {
        super("User cpf already exists");
    }
}

export { UsersCpfProfileError };