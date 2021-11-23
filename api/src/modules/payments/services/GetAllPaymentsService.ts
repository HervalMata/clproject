import {inject, injectable} from "tsyringe";
import {IPaymentsRepository} from "../repositories/IPaymentsRepository";
import {Payment} from "../entities/Payment";

@injectable()
class GetAllPaymentsService {

    constructor(
        @inject("PaymentsRepository")
        private paymentsRepository: IPaymentsRepository
    ) {
    }

    async execute(): Promise<Payment[]> {
        return await this.paymentsRepository.list();
    }
}

export {GetAllPaymentsService};