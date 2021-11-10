import {AddressRepositoryInMemory} from "../repositories/in-memory/AddressRepositoryInMemory";
import {CreateUsersAddressService} from "./CreateUsersAddressService";
import {UsersRepositoryInMemory} from "../../users/repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "../../users/services/CreateUserService";
import {Type} from "../entities/Address";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let addressRepositoryInMemory: AddressRepositoryInMemory;
let createUsersAddressService: CreateUsersAddressService;

describe('Create Users Address',  () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        createUsersAddressService = new CreateUsersAddressService(addressRepositoryInMemory);
    });

    it('should be able to create an users address', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        const user_id = user.id;

        await expect(createUsersAddressService.execute({
            user_id: user_id,
            type: Type.shipping,
            street: "Rua Test",
            number: 100,
            postal_code: "25.960-530",
            district: "Alto",
            city: "Teresópolis",
            state: "Rio de Janeiro",
            complement: "xxxxxxx",
            country: "BRA"
        })).resolves.not.toThrow();
    });

    it('should not be able to create an users address with incomplete data', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        const user_id = user.id;

        await expect(await createUsersAddressService.execute({
            user_id: user_id,
            type: Type.shipping,
            street: "Rua Test",
            number: null,
            postal_code: null,
            district: null,
            city: null,
            state: "Rio de Janeiro",
            complement: "xxxxxxx",
            country: "BRA"
        })).toBe(undefined);
    });

    it('should not be able to create an address with user non existent', async () => {
        const user_id = "627b24bc-75b5-4509-8768-258f2e8c199c";

        await expect(await createUsersAddressService.execute({
            user_id: user_id,
            type: Type.shipping,
            street: "Rua Test",
            number: 100,
            postal_code: "25.960-530",
            district: "Alto",
            city: "Teresópolis",
            state: "Rio de Janeiro",
            complement: "xxxxxxx",
            country: "BRA"
        })).toBe(undefined);
    });
});