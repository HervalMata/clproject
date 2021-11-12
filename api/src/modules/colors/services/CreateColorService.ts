import {inject, injectable} from "tsyringe";
import { ICreateColorDTO } from "../dtos/ICreateColorDTO";
import { IColorsRepository } from "../repositories/IColorsRepository";
import {ColorAlreadyExistsError} from "../errors/ColorAlreadyExistsError";

@injectable()
class CreateColorService {

    constructor(
        @inject("ColorsRepository")
        private colorsRepository: IColorsRepository
    ) {}

    async execute({ name }: ICreateColorDTO): Promise<void> {
        const colorAlreadyExists = await this.colorsRepository.findByName(name);
        if (colorAlreadyExists) {
            throw new ColorAlreadyExistsError();
        }
        await this.colorsRepository.create({ name });
    }
}

export { CreateColorService };