import {ICreateMethodsPaymentDTO} from "../dtos/ICreateMethodsPaymentDTO";
import {MethodsPayment} from "../entities/MethodsPayment";

interface IMethodsPaymentRepository {
    create(data: ICreateMethodsPaymentDTO): Promise<void>;

    list(): Promise<MethodsPayment[]>;

    findById(id: string): Promise<MethodsPayment>;

    findByMethodPayment(method: string): Promise<MethodsPayment>;
}

export {IMethodsPaymentRepository};