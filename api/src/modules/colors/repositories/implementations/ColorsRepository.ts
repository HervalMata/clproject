import {ICreateColorDTO} from "../../dtos/ICreateColorDTO";
import {Color} from "../../entities/Color";
import {IColorsRepository} from "../IColorsRepository";
import {getRepository, Repository} from "typeorm";

class ColorsRepository implements IColorsRepository {
    private repository: Repository<Color>;

    constructor() {
        this.repository = getRepository(Color);
    }

    async create(data: ICreateColorDTO): Promise<void> {
        const { id, name } = data;
        const color = this.repository.create({ id, name });
        await this.repository.save(color);
    }

    async findByName(name: string): Promise<Color> {
        return await this.repository.findOne({ name });
    }

    async list(): Promise<Color[]> {
        return await this.repository.find();
    }

    async findByID(id: string): Promise<Color> {
        return await this.repository.findOne(id);
    }

    async findByIds(ids: string[]): Promise<Color[]> {
        return await this.repository.findByIds(ids);
    }
}

export { ColorsRepository };