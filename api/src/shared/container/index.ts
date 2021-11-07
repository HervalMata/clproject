import {container} from "tsyringe";
import {IUsersRepository} from "../../modules/users/repositories/IUsersRepository";
import {UsersRepository} from "../../modules/users/repositories/implementations/UsersRepository";
import {IUsersTokensRepository} from "../../modules/users/repositories/IUsersTokensRepository";
import {UsersTokensRepository} from "../../modules/users/repositories/implementations/UsersTokensRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
    "UsersTokensRepository",
    UsersTokensRepository
);