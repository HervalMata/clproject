import {inject, injectable} from "tsyringe";
import {IStatusPaymentRepository} from "../repositories/IStatusPaymentRepository";
import {ICreateStatusPaymentDTO} from "../dtos/ICreateStatusPaymentDTO";
import {StatusPaymentExistentError} from "../errors/StatusPaymentExistentError";

@injectable()
class CreateStatusPaymentService {

    constructor(
        @inject("StatusPaymentRepository")
        private statusPaymentRepository: IStatusPaymentRepository
    ) {
    }

    async execute({status_payment}: ICreateStatusPaymentDTO): Promise<void> {
        const status_payment_existent = await this.statusPaymentRepository.findByStatusPayment(status_payment);
        if (status_payment_existent) {
            throw new StatusPaymentExistentError();
        }
        await this.statusPaymentRepository.create({status_payment});
    }
}

export {CreateStatusPaymentService};