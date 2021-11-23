import {inject, injectable} from "tsyringe";
import {IMethodsPaymentRepository} from "../repositories/IMethodsPaymentRepository";
import {MethodsPayment} from "../entities/MethodsPayment";

interface IRequest {
    id: string;
}

@injectable()
class GetMethodsPaymentService {

    constructor(
        @inject("MethodsPaymentRepository")
        private methodsPaymentRepository: IMethodsPaymentRepository
    ) {
    }

    async execute({id}: IRequest): Promise<MethodsPayment> {
        return await this.methodsPaymentRepository.findById(id);
    }
}

export {GetMethodsPaymentService};