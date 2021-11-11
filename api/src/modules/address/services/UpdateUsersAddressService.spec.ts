import {UsersRepositoryInMemory} from "../../users/repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "../../users/services/CreateUserService";
import {AddressRepositoryInMemory} from "../repositories/in-memory/AddressRepositoryInMemory";
import {CreateUsersAddressService} from "./CreateUsersAddressService";
import {GetUsersAddressService} from "./GetUsersAddressService";
import {UpdateUsersAddressService} from "./UpdateUsersAddressService";
import {Address, Type} from "../entities/Address";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let addressRepositoryInMemory: AddressRepositoryInMemory;
let createUsersAddressService: CreateUsersAddressService;
let getUsersAddressService: GetUsersAddressService;
let updateUsersAddressService: UpdateUsersAddressService;

describe('Update User Address',  () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        createUsersAddressService = new CreateUsersAddressService(addressRepositoryInMemory);
        getUsersAddressService = new GetUsersAddressService(addressRepositoryInMemory);
        updateUsersAddressService = new UpdateUsersAddressService(addressRepositoryInMemory);
    });

    it('should be able to update an users address', async () => {
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

        const get_address = await getUsersAddressService.execute({user_id});
        const id = get_address[0].id;

        await expect(updateUsersAddressService.execute({
            id: id,
            type: Type.billing,
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
});