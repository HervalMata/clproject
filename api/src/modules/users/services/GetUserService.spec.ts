import {UsersRepositoryInMemory} from "../repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "./CreateUserService";
import {GetUserService} from "./GetUserService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let getUserService: GetUserService;

describe('Get A User', () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
        getUserService = new GetUserService(usersRepositoryInMemory);
    });

    it('should be able to get a user', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });
        const id = user.id
        const user_created = await getUserService.execute({id});
        const email = user_created.email;
        expect(email).toEqual("user@test.com");
    });

    it('should not be able to get a user non existent', async () => {
        const id = "";
        await expect(
            await getUserService.execute({id})
        ).toBe(undefined);
    });
});