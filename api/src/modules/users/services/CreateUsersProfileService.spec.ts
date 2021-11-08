import {UsersRepositoryInMemory} from "../repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "./CreateUserService";
import {UsersProfileRepositoryInMemory} from "../repositories/in-memory/UsersProfileRepositoryInMemory";
import {CreateUsersProfileService} from "./CreateUsersProfileService";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import {UsersCpfProfileError} from "../errors/UsersCpfProfileError";
import {UserAlreadyExistsError} from "../errors/UserAlreadyExistsError";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let usersProfileRepositoryInMemory: UsersProfileRepositoryInMemory;
let createUsersProfileService: CreateUsersProfileService;
let dateProvider: DayjsDateProvider;

describe("Create Users Profile", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
        usersProfileRepositoryInMemory = new UsersProfileRepositoryInMemory();
        createUsersProfileService = new CreateUsersProfileService(usersProfileRepositoryInMemory);
        dateProvider = new DayjsDateProvider();
    });

    it('should be able to create users profile', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        const birth_date = dateProvider.minusYears(21, new Date());

        await expect(createUsersProfileService.execute({
            user_id: user.id,
            cpf: "11.111.111-11",
            birth_date: birth_date,
            phone_number: "(11) 99999-9999"
        })).resolves.not.toThrow();
    });

    it('should not be able to create users profile with cpf existent', async () => {
        const user1 = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        const user2 = await createUserService.execute({
            name: "User Test2",
            email: "user2@test.com",
            password: "1234"
        });

        const birth_date = dateProvider.minusYears(21, new Date());

        await createUsersProfileService.execute({
            user_id: user1.id,
            cpf: "11.111.111-11",
            birth_date: birth_date,
            phone_number: "(11) 99999-9999"
        });

        await expect(createUsersProfileService.execute({
            user_id: user2.id,
            cpf: "11.111.111-11",
            birth_date: birth_date,
            phone_number: "(11) 99999-9999"
        })).rejects.toBeInstanceOf(UsersCpfProfileError);
    });

    it('should not be able to create users profile with user already existent', async () => {
        const user1 = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        const birth_date = dateProvider.minusYears(21, new Date());

        await createUsersProfileService.execute({
            user_id: user1.id,
            cpf: "11.111.111-11",
            birth_date: birth_date,
            phone_number: "(11) 99999-9999"
        });

        await expect(createUsersProfileService.execute({
            user_id: user1.id,
            cpf: "99.999.999-99",
            birth_date: birth_date,
            phone_number: "(11) 99999-9999"
        })).rejects.toBeInstanceOf(UserAlreadyExistsError);
    });
});