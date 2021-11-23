import {inject, injectable} from "tsyringe";
import {IMethodsPaymentRepository} from "../repositories/IMethodsPaymentRepository";
import {MethodsPayment} from "../entities/MethodsPayment";

@injectable()
class GetAllMethodsPaymentService {

    constructor(
        @inject("MethodsPaymentRepository")
        private methodsPaymentRepository: IMethodsPaymentRepository
    ) {
    }

    async execute(): Promise<MethodsPayment[]> {
        return await this.methodsPaymentRepository.list();
    }
}

export {GetAllMethodsPaymentService};