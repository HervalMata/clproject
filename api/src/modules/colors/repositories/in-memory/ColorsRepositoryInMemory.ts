import {ICreateColorDTO} from "../../dtos/ICreateColorDTO";
import {IColorsRepository} from "../IColorsRepository";
import {Color} from "../../entities/Color";

class ColorsRepositoryInMemory implements IColorsRepository {
    colors: Color[] = [];

    async create({ name }: ICreateColorDTO): Promise<void> {
        const color = new Color();
        Object.assign(color, { name });
        this.colors.push(color);
    }

    async findByID(id: string): Promise<Color> {
        return this.colors.find((color) => color.id === id);
    }

    async findByName(name: string): Promise<Color> {
        return this.colors.find((color) => color.name === name);
    }

    async list(): Promise<Color[]> {
        return this.colors;
    }

    async findByIds(ids: string[]): Promise<Color[]> {
        return this.colors.filter((color) =>
            ids.includes(color.id)
        );
    }

}

export { ColorsRepositoryInMemory };