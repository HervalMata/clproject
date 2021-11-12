import {inject, injectable} from "tsyringe";
import {IMaterialsRepository} from "../repositories/IMaterialsRepository";
import {Material} from "../entities/Material";

@injectable()
class GetAllMaterialsService {

    constructor(
        @inject("MaterialsRepository")
        private materialsRepository: IMaterialsRepository
    ) {}

    async execute(): Promise<Material[]> {
        return await this.materialsRepository.list();
    }
}

export { GetAllMaterialsService };