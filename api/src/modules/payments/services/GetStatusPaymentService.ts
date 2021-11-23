import {inject, injectable} from "tsyringe";
import {IStatusPaymentRepository} from "../repositories/IStatusPaymentRepository";
import {StatusPayment} from "../entities/StatusPayment";

interface IRequest {
    id: string;
}

@injectable()
class GetStatusPaymentService {

    constructor(
        @inject("StatusPaymentRepository")
        private statusPaymentRepository: IStatusPaymentRepository
    ) {
    }

    async execute({id}: IRequest): Promise<StatusPayment> {
        console.log(id)
        return await this.statusPaymentRepository.findById(id);
    }
}

export {GetStatusPaymentService};