import { DayjsDateProvider } from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { UsersRepositoryInMemory } from "../repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "../repositories/in-memory/UsersTokensRepositoryInMemory";
import {AuthenticateUserService} from "./AuthenticateUserService";
import {CreateUserService} from "./CreateUserService";
import {AppError} from "../../../shared/errors/AppError";

let authenticateUserService: AuthenticateUserService;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let userTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let createUserService: CreateUserService;

describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        userTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
        dateProvider = new DayjsDateProvider();
        authenticateUserService = new AuthenticateUserService(
            usersRepositoryInMemory, userTokensRepositoryInMemory, dateProvider
        );
        createUserService = new CreateUserService(usersRepositoryInMemory);
    });

    it('should be able to authenticate an user', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        const result = await authenticateUserService.execute({
            email: user.email, password: "1234"
        });

        expect(result).toHaveProperty("token");
    });

    it('should not be able to authenticate an non existent user', async () => {
        await expect(authenticateUserService.execute({ email: "false@email.com", password: "1234" })).rejects.toEqual(new AppError("Email or password incorrect"));
    });

    it('should not be able to authenticate an user with incorrect password', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });
        console.log(user.email, user.password);
        await expect(authenticateUserService.execute({
            email: user.email, password: "incorrect password"
        })).rejects.toEqual(new AppError("Email or password incorrect"));
    });
});