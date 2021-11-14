import { ICreateMaterialsDTO } from "../dtos/ICreateMaterialsDTO";
import {Material} from "../entities/Material";

interface IMaterialsRepository {
    create(data: ICreateMaterialsDTO): Promise<void>;
    findByName(name: string): Promise<Material>;
    list(): Promise<Material[]>;
    findByID(id: string): Promise<Material>;
    findByIds(ids: string[]): Promise<Material[]>;
}

export { IMaterialsRepository };