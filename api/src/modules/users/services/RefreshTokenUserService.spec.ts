import {AuthenticateUserService} from "./AuthenticateUserService";
import {UsersRepositoryInMemory} from "../repositories/in-memory/UsersRepositoryInMemory";
import {UsersTokensRepositoryInMemory} from "../repositories/in-memory/UsersTokensRepositoryInMemory";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import {CreateUserService} from "./CreateUserService";
import {RefreshTokenUserService} from "./RefreshTokenUserService";
import auth from "../../../config/auth";

let authenticateUserService: AuthenticateUserService;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let userTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let createUserService: CreateUserService;
let refreshTokenUserService: RefreshTokenUserService;

interface IPayload {
    sub:string;
    email: string;
}

describe('Refresh Token User',  () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        userTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
        dateProvider = new DayjsDateProvider();
        authenticateUserService = new AuthenticateUserService(
            usersRepositoryInMemory, userTokensRepositoryInMemory, dateProvider
        );
        createUserService = new CreateUserService(usersRepositoryInMemory);
        refreshTokenUserService = new RefreshTokenUserService(
            userTokensRepositoryInMemory, dateProvider
        );
    });

    it('should be able to refresh token of user', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        const token = await authenticateUserService.execute({
            email: user.email, password: "1234"
        });

        const token_user = token.refresh_token
        const result = await refreshTokenUserService.execute(
            token_user
        );

        expect(result).toHaveProperty("refresh_token");
    });
});