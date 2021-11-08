import {AuthenticateUserService} from "./AuthenticateUserService";
import {UsersRepositoryInMemory} from "../repositories/in-memory/UsersRepositoryInMemory";
import {UsersTokensRepositoryInMemory} from "../repositories/in-memory/UsersTokensRepositoryInMemory";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import {CreateUserService} from "./CreateUserService";
import {ResetPasswordUserService} from "./ResetPasswordUserService";
import {EtherealMailProvider} from "../../../shared/container/providers/MailProvider/implementations/EtherealMailProvider";
import {AppError} from "../../../shared/errors/AppError";
import {ResetPasswordUserTokenInvalidError} from "../errors/ResetPasswordUserTokenInvalidError";

let authenticateUserService: AuthenticateUserService;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let userTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let createUserService: CreateUserService;
let mailProvider: EtherealMailProvider;
let resetPasswordUserService: ResetPasswordUserService;

describe('Reset Password User', () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        userTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
        dateProvider = new DayjsDateProvider();
        mailProvider = new EtherealMailProvider();
        authenticateUserService = new AuthenticateUserService(
            usersRepositoryInMemory, userTokensRepositoryInMemory, dateProvider
        );
        createUserService = new CreateUserService(usersRepositoryInMemory);
        resetPasswordUserService = new ResetPasswordUserService(
            usersRepositoryInMemory, userTokensRepositoryInMemory, dateProvider, mailProvider
        );
    });

    it('should be able to reset password of user', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        const token_sub = await authenticateUserService.execute({
            email: user.email, password: "1234"
        });

        const token = token_sub.refresh_token;
        const password = "123456";

        await expect(resetPasswordUserService.execute({token, password})).resolves.not.toThrow();
    });

    it('should not be able to reset password of user with token invalid', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        const token = "token invalid";
        const password = "123456";

        await expect(resetPasswordUserService.execute({token, password})).rejects.toBeInstanceOf(ResetPasswordUserTokenInvalidError);
    });
});