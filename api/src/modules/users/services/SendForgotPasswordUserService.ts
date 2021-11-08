import {inject, injectable} from "tsyringe";
import { v4 as uuidV4 } from "uuid";
import { IDateProvider } from "../../../shared/container/providers/DateProvider/IDateProvider";
import { IMailProvider } from "../../../shared/container/providers/MailProvider/IMailProvider";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { IUsersTokensRepository } from "../repositories/IUsersTokensRepository";
import {resolve} from "path";
import {SendForgotPasswordUserError} from "../errors/SendForgotPasswordUserError";

@injectable()
class SendForgotPasswordUserService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider,
        @inject("EtherealMailProvider")
        private mailProvider: IMailProvider
    ) {}

    async execute(email: string): Promise<void> {
        const user = await this.usersRepository.findByEmail(email);
        const templatePath = resolve(
            __dirname, "..", "..", "users", "views", "emails", "ForgotPassword.hbs"
        );
        if (!user) {
            throw new SendForgotPasswordUserError();
        }

        const token = uuidV4();
        const expires_date = this.dateProvider.addHours(3, null);
        await this.usersTokensRepository.create({
            refresh_token: token,
            user_id: user.id,
            expires_date
        });

        const variables = {
            name: user.name, link: `${process.env.FORGOT_MAIL_URL}${token}`,
        }

        await this.mailProvider.sendMail(
            email,
            "Recuperação de senha",
            // @ts-ignore
            variables,
            templatePath,
        );
    }
}

export { SendForgotPasswordUserService };