import {inject, injectable} from "tsyringe";
import {IMaterialsRepository} from "../repositories/IMaterialsRepository";
import {ICreateMaterialsDTO} from "../dtos/ICreateMaterialsDTO";
import {MaterialAlreadyExistsError} from "../errors/MaterialAlreadyExistsError";

@injectable()
class CreateMaterialService {

    constructor(
        @inject("MaterialsRepository")
        private materialsRepository: IMaterialsRepository
    ) {}

    async execute({ name }: ICreateMaterialsDTO): Promise<void> {
        const materialAlreadyExists = await this.materialsRepository.findByName(name);
        if (materialAlreadyExists) {
            throw new MaterialAlreadyExistsError();
        }
        await this.materialsRepository.create({ name });
    }
}

export { CreateMaterialService };