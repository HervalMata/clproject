import {inject, injectable} from "tsyringe";
import {IColorsRepository} from "../repositories/IColorsRepository";
import {Color} from "../entities/Color";

interface IRequest {
    id: string;
}

@injectable()
class GetColorService {

    constructor(
        @inject("ColorsRepository")
        private colorsRepository: IColorsRepository
    ) {}

    async execute({ id }: IRequest): Promise<Color> {
        return await this.colorsRepository.findByID(id);
    }
}

export { GetColorService };