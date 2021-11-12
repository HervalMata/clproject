import {inject, injectable} from "tsyringe";
import {IMaterialsRepository} from "../repositories/IMaterialsRepository";
import {Material} from "../entities/Material";

interface IRequest {
    id: string;
}

@injectable()
class GetMaterialService {

    constructor(
        @inject("MaterialsRepository")
        private materialsRepository: IMaterialsRepository
    ) {}

    async execute({ id }: IRequest): Promise<Material> {
        return await this.materialsRepository.findByID(id);
    }
}

export { GetMaterialService };