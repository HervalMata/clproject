import {inject, injectable} from "tsyringe";
import {IPaymentsRepository} from "../repositories/IPaymentsRepository";
import {Payment} from "../entities/Payment";

interface IRequest {
    id: string;
}

@injectable()
class GetPaymentService {

    constructor(
        @inject("PaymentsRepository")
        private paymentsRepository: IPaymentsRepository
    ) {
    }

    async execute({id}: IRequest): Promise<Payment> {
        return await this.paymentsRepository.findById(id);
    }
}

export {GetPaymentService};