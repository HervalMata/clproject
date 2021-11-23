import {inject, injectable} from "tsyringe";
import {IStatusPaymentRepository} from "../repositories/IStatusPaymentRepository";
import {StatusPayment} from "../entities/StatusPayment";

@injectable()
class GetAllStatusPaymentService {

    constructor(
        @inject("StatusPaymentRepository")
        private statusPaymentRepository: IStatusPaymentRepository
    ) {
    }

    async execute(): Promise<StatusPayment[]> {
        return await this.statusPaymentRepository.list();
    }
}

export {GetAllStatusPaymentService};