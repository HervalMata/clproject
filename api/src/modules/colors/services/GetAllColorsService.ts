import {inject, injectable} from "tsyringe";
import { IColorsRepository } from "../repositories/IColorsRepository";
import {Color} from "../entities/Color";

@injectable()
class GetAllColorsService {

    constructor(
        @inject("ColorsRepository")
        private colorsRepository: IColorsRepository
    ) {}

    async execute(): Promise<Color[]> {
        return await this.colorsRepository.list();
    }
}

export { GetAllColorsService };