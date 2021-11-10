import "reflect-metadata"
import {inject, injectable} from "tsyringe";
import { IUsersProfileRepository } from "../repositories/IUsersProfileRepository";
import {UsersCpfProfileError} from "../errors/UsersCpfProfileError";
import {UserAlreadyExistsError} from "../errors/UserAlreadyExistsError";
import { ICreateUsersProfileDTO } from "../dtos/ICreateUsersProfileDTO";

@injectable()
class CreateUsersProfileService {

    constructor(
        @inject("UsersProfileRepository")
        private usersProfileRepository: IUsersProfileRepository
    ) {}

    async execute({ user_id, cpf, birth_date, phone_number, avatar }: ICreateUsersProfileDTO): Promise<void> {

        const cpfAlreadyExists = await this.usersProfileRepository.findByCpf(cpf);
        if (cpfAlreadyExists) {
            throw new UsersCpfProfileError();
        }
        const userAlreadyExists = await this.usersProfileRepository.findByUserId(user_id);
        if (userAlreadyExists) {
            throw new UserAlreadyExistsError();
        }
        await this.usersProfileRepository.create({ user_id, cpf, birth_date, phone_number, avatar });
    }
}

export { CreateUsersProfileService };