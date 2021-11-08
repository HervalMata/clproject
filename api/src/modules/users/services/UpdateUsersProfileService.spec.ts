import {UsersRepositoryInMemory} from "../repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserService} from "./CreateUserService";
import {UsersProfileRepositoryInMemory} from "../repositories/in-memory/UsersProfileRepositoryInMemory";
import {CreateUsersProfileService} from "./CreateUsersProfileService";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import {UpdateUsersProfileService} from "./UpdateUsersProfileService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let usersProfileRepositoryInMemory: UsersProfileRepositoryInMemory;
let createUsersProfileService: CreateUsersProfileService;
let dateProvider: DayjsDateProvider;
let updateUsersProfileService: UpdateUsersProfileService;

describe("Update User Profile", () => {
   beforeEach(() => {
       usersRepositoryInMemory = new UsersRepositoryInMemory();
       createUserService = new CreateUserService(usersRepositoryInMemory);
       usersProfileRepositoryInMemory = new UsersProfileRepositoryInMemory();
       createUsersProfileService = new CreateUsersProfileService(usersProfileRepositoryInMemory);
       dateProvider = new DayjsDateProvider();
       updateUsersProfileService = new UpdateUsersProfileService(usersProfileRepositoryInMemory);
   });

    it('should be able to update an user profile', async () => {
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

        const user_profile = await usersProfileRepositoryInMemory.findByCpf("11.111.111-11");
        console.log(user_profile);
        const user_id = user_profile.user_id;
        const phone_number = "(99) 99999-9999";
        console.log(user_id);
        await expect(updateUsersProfileService.execute({user_id, phone_number})).resolves.not.toThrow();
    });
});