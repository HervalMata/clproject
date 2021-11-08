import {UsersRepositoryInMemory} from "../repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "./CreateUserService";
import {AppError} from "../../../shared/errors/AppError";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;

describe('Create User', () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
    });

    it('should be able create un user', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        expect(user).toHaveProperty('id');
    });

    it('should not be able create un user with same emails from another', async () => {
        await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        await expect(createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        })).rejects.toBeInstanceOf(AppError);

    });
});