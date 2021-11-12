import {IMaterialsRepository} from "../IMaterialsRepository";
import {ICreateMaterialsDTO} from "../../dtos/ICreateMaterialsDTO";
import {Material} from "../../entities/Material";
import {getRepository, Repository} from "typeorm";

class MaterialsRepository implements IMaterialsRepository {
    private repository: Repository<Material>;

    constructor() {
        this.repository = getRepository(Material);
    }

    async create(data: ICreateMaterialsDTO): Promise<void> {
        const { id, name } = data;
        const color = this.repository.create({ id, name });
        await this.repository.save(color);
    }

    async findByID(id: string): Promise<Material> {
        return await this.repository.findOne(id);
    }

    async findByName(name: string): Promise<Material> {
        return await this.repository.findOne({ name });
    }

    async list(): Promise<Material[]> {
        return await this.repository.find();
    }

}

export { MaterialsRepository };