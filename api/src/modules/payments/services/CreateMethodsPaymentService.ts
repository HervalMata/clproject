import {inject, injectable} from "tsyringe";
import {IMethodsPaymentRepository} from "../repositories/IMethodsPaymentRepository";
import {ICreateMethodsPaymentDTO} from "../dtos/ICreateMethodsPaymentDTO";

@injectable()
class CreateMethodsPaymentService {

    constructor(
        @inject("MethodsPaymentRepository")
        private methodsPaymentRepository: IMethodsPaymentRepository
    ) {
    }

    async execute({method}: ICreateMethodsPaymentDTO): Promise<void> {
        /*const methods_payment_existent = await this.methodsPaymentRepository.findByMethodPayment(method);
        if (methods_payment_existent) {
            throw new MethodPaymentExistentError();
        }*/
        await this.methodsPaymentRepository.create({method});
    }
}

export {CreateMethodsPaymentService};