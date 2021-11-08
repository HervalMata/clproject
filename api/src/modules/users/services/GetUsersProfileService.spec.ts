import {UsersRepositoryInMemory} from "../repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "./CreateUserService";
import {UsersProfileRepositoryInMemory} from "../repositories/in-memory/UsersProfileRepositoryInMemory";
import {CreateUsersProfileService} from "./CreateUsersProfileService";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import {GetUsersProfileService} from "./GetUsersProfileService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let usersProfileRepositoryInMemory: UsersProfileRepositoryInMemory;
let createUsersProfileService: CreateUsersProfileService;
let dateProvider: DayjsDateProvider;
let getUsersProfileService: GetUsersProfileService;

describe("Get User Profile", () => {
   beforeEach(() => {
       usersRepositoryInMemory = new UsersRepositoryInMemory();
       createUserService = new CreateUserService(usersRepositoryInMemory);
       usersProfileRepositoryInMemory = new UsersProfileRepositoryInMemory();
       createUsersProfileService = new CreateUsersProfileService(usersProfileRepositoryInMemory);
       dateProvider = new DayjsDateProvider();
       getUsersProfileService = new GetUsersProfileService(usersProfileRepositoryInMemory);
   }) ;

    it('should be able to get user profile', async () => {
        const user = await createUserService.execute({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        const birth_date = dateProvider.minusYears(21, new Date());

        await createUsersProfileService.execute({
            user_id: user.id,
            cpf: "11.111.111-11",
            birth_date: birth_date,
            phone_number: "(11) 99999-9999"
        });

        const user_id = user.id;

        const get_user = await getUsersProfileService.execute({user_id});

        const cpf = get_user.cpf;

        expect(cpf).toEqual("11.111.111-11");
    });

    it('should not be able to get user profile non existent', async () => {
        const user_id = "bfnvjfnvbjf";

        await expect(await getUsersProfileService.execute({user_id})).toBe(undefined);
    });
});