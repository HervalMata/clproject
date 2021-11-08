import {UsersRepositoryInMemory} from "../repositories/in-memory/UsersRepositoryInMemory";
import {UsersTokensRepositoryInMemory} from "../repositories/in-memory/UsersTokensRepositoryInMemory";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import {SendForgotPasswordUserService} from "./SendForgotPasswordUserService";
import {MailProviderInMemory} from "../../../shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import {SendForgotPasswordUserError} from "../errors/SendForgotPasswordUserError";

let sendForgotPasswordUserService: SendForgotPasswordUserService;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let userTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let mailProvider: MailProviderInMemory;

describe('Send Forgot Password To User By Email',  () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        userTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
        dateProvider = new DayjsDateProvider();
        mailProvider = new MailProviderInMemory();
        sendForgotPasswordUserService = new SendForgotPasswordUserService(
            usersRepositoryInMemory, userTokensRepositoryInMemory, dateProvider, mailProvider
        );
    });

    it('should be able to send a forgot password emails to user', async () => {
        const sendMail = jest.spyOn(mailProvider, "sendMail");

        await usersRepositoryInMemory.create({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        await sendForgotPasswordUserService.execute("user@test.com");

        expect(sendMail).toHaveBeenCalled();
    });

    it('should not be able to send a forgot password emails to an non existent user', async () => {
        const sendMail = jest.spyOn(mailProvider, "sendMail");

        await expect(sendForgotPasswordUserService.execute("user@test.com")).rejects.toBeInstanceOf(SendForgotPasswordUserError);

        expect(sendMail).not.toBeCalled();
    });

    it('should be able to create a new token to reset password to user', async () => {
        const generatedToken = jest.spyOn(userTokensRepositoryInMemory, "create");

        await usersRepositoryInMemory.create({
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        });

        await sendForgotPasswordUserService.execute("user@test.com");

        expect(generatedToken).toHaveBeenCalled();
    });
});