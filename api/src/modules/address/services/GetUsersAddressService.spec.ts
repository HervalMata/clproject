import {UsersRepositoryInMemory} from "../../users/repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "../../users/services/CreateUserService";
import {AddressRepositoryInMemory} from "../repositories/in-memory/AddressRepositoryInMemory";
import {CreateUsersAddressService} from "./CreateUsersAddressService";
import {GetUsersAddressService} from "./GetUsersAddressService";
import {Type} from "../entities/Address";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let addressRepositoryInMemory: AddressRepositoryInMemory;
let createUsersAddressService: CreateUsersAddressService;
let getUsersAddressService: GetUsersAddressService;

describe('Get Users Address', () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        createUsersAddressService = new CreateUsersAddressService(addressRepositoryInMemory);
        getUsersAddressService = new GetUsersAddressService(addressRepositoryInMemory);
    });

    it('should be able to list the users address', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        const user_id = user.id;

        await createUsersAddressService.execute({
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
        });

        await createUsersAddressService.execute({
            user_id: user_id,
            type: Type.billing,
            street: "Rua Test",
            number: 100,
            postal_code: "25.960-530",
            district: "Alto",
            city: "Teresópolis",
            state: "Rio de Janeiro",
            complement: "xxxxxxx",
            country: "BRA"
        });

        await createUsersAddressService.execute({
            user_id: user_id,
            type: Type.same,
            street: "Rua Test",
            number: 100,
            postal_code: "25.960-530",
            district: "Alto",
            city: "Teresópolis",
            state: "Rio de Janeiro",
            complement: "xxxxxxx",
            country: "BRA"
        });

        const get_users_address = await getUsersAddressService.execute({ user_id });

        expect(get_users_address).toHaveLength(3);
    });

    it('should not be able to list the users address non saved', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        const user_id = user.id;

        const get_users_address = await getUsersAddressService.execute({ user_id });

        expect(get_users_address).toHaveLength(0);
    });
});