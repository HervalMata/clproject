import {UsersRepositoryInMemory} from "../repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "./CreateUserService";
import {UpdateSellerUserService} from "./UpdateSellerUserService";
import {GetUserService} from "./GetUserService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let updateSellerUserService: UpdateSellerUserService;
let getUserService: GetUserService;

describe('Active Seller User', () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
        updateSellerUserService = new UpdateSellerUserService(usersRepositoryInMemory);
        getUserService = new GetUserService(usersRepositoryInMemory);
    });

    it('should be able to update seller user', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        const id = user.id;
        const is_seller = true;
        await updateSellerUserService.execute({id, is_seller});
        const seller = await getUserService.execute({id});
        const isSeller = seller.is_seller;
        expect(isSeller).toEqual(true);
    });
});