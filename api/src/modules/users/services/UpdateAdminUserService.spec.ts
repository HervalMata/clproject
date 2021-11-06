import {UsersRepositoryInMemory} from "../repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "./CreateUserService";
import {UpdateAdminUserService} from "./UpdateAdminUserService";
import {GetUserService} from "./GetUserService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let updateAdminUserService: UpdateAdminUserService;
let getUserService: GetUserService;

describe('Active Admin User', () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
        updateAdminUserService = new UpdateAdminUserService(usersRepositoryInMemory);
        getUserService = new GetUserService(usersRepositoryInMemory);
    });

    it('should be able to update admin user', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        const id = user.id;
        const is_admin = true;
        await updateAdminUserService.execute({id, is_admin});
        const admin = await getUserService.execute({id});
        const isAdmin = admin.is_admin;
        expect(isAdmin).toEqual(true);
    });
});