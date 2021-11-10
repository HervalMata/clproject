import {inject, injectable} from "tsyringe";
import { IDateProvider } from "../../../shared/container/providers/DateProvider/IDateProvider";
import { IMailProvider } from "../../../shared/container/providers/MailProvider/IMailProvider";
import {IUsersRepository} from "../repositories/IUsersRepository";
import { IUsersTokensRepository } from "../repositories/IUsersTokensRepository";
import {AppError} from "../../../shared/errors/AppError";
import {hash} from "bcryptjs";
import {ResetPasswordUserTokenInvalidError} from "../errors/ResetPasswordUserTokenInvalidError";

interface IRequest {
    token: string;
    password: string;
}

@injectable()
class ResetPasswordUserService {

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

    async execute({ token, password }: IRequest): Promise<void> {

        const userToken = await this.usersTokensRepository.findByRefreshToken(token);
        if (!userToken) {
            throw new ResetPasswordUserTokenInvalidError();
        }
        if (this.dateProvider.checkIsBefore(
            userToken.expires_date, this.dateProvider.dateNow()
        )) {
            throw new AppError("Token Expired")
        }

        const user = await this.usersRepository.findById(userToken.user_id);
        user.password = await hash(password, Number(process.env.DEFAULT_HASH_SALT));

        await this.usersRepository.create(user);
        await this.usersTokensRepository.deleteById(userToken.id);
    }
}

export { ResetPasswordUserService };