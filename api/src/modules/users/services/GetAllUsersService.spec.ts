import {UsersRepositoryInMemory} from "../repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "./CreateUserService";
import { GetAllUsersService } from "./GetAllUsersService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let getAllUsersService: GetAllUsersService;

describe("Get All Users",  () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
        getAllUsersService = new GetAllUsersService(usersRepositoryInMemory);
    });

    it('should be able to list users', async () => {
        await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        await createUserService.execute({
            name: "User Test1",
            email: "user1@test.com",
            password: "1234"
        });

        const getAllUsers = await getAllUsersService.execute();
        expect(getAllUsers).toHaveLength(2);
    });

    it('should be able to list non users', async () => {
        const getAllUsers = await getAllUsersService.execute();
        expect(getAllUsers).toHaveLength(0);
    });
});