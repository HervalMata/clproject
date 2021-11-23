import {ICreateMethodsPaymentDTO} from "../../dtos/ICreateMethodsPaymentDTO";
import {MethodsPayment} from "../../entities/MethodsPayment";
import {IMethodsPaymentRepository} from "../IMethodsPaymentRepository";
import {getRepository, Repository} from "typeorm";

class MethodsPaymentRepository implements IMethodsPaymentRepository {
    private repository: Repository<MethodsPayment>;

    constructor() {
        this.repository = getRepository(MethodsPayment);
    }

    async create(data: ICreateMethodsPaymentDTO): Promise<void> {
        const {id, method} = data;
        const methodPayment = this.repository.create({id, method});
        await this.repository.save(methodPayment);
    }

    async findById(id: string): Promise<MethodsPayment> {
        return await this.repository.findOne(id);
    }

    async findByMethodPayment(method: string): Promise<MethodsPayment> {
        return await this.repository.findOne({method});
    }

    async list(): Promise<MethodsPayment[]> {
        return await this.repository.find();
    }

}

export {MethodsPaymentRepository};