import {IMethodsPaymentRepository} from "../IMethodsPaymentRepository";
import {MethodsPayment} from "../../entities/MethodsPayment";
import {ICreateMethodsPaymentDTO} from "../../dtos/ICreateMethodsPaymentDTO";

class MethodsPaymentRepositoryInMemory implements IMethodsPaymentRepository {
    methodsPayment: MethodsPayment[] = [];

    async create(data: ICreateMethodsPaymentDTO): Promise<void> {
        const {method} = data;
        const methodsPayment = new MethodsPayment();
        Object.assign(methodsPayment, {method});
        this.methodsPayment.push(methodsPayment);
    }

    async findById(id: string): Promise<MethodsPayment> {
        // @ts-ignore
        return this.methodsPayment.find((methodsPayment) => methodsPayment.id === id);
    }

    async findByMethodPayment(method: string): Promise<MethodsPayment> {
        // @ts-ignore
        return this.methodsPayment.find((methodsPayment) => methodsPayment.method === method);
    }

    async list(): Promise<MethodsPayment[]> {
        return this.methodsPayment;
    }

}

export {MethodsPaymentRepositoryInMemory};