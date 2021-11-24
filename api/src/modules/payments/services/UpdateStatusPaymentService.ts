import {inject, injectable} from "tsyringe";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import {IPaymentsRepository} from "../repositories/IPaymentsRepository";
import {IStatusPaymentRepository} from "../repositories/IStatusPaymentRepository";

interface IRequest {
    id: string;
    status_payment_id: string;
}

@injectable()
class UpdateStatusOrderService {

    constructor(
        @inject("PaymentsRepository")
        private paymentsRepository: IPaymentsRepository,
        @inject("DateProvider")
        private dateProvider: DayjsDateProvider,
        @inject("StatusPaymentRepository")
        private statusPaymentRepository: IStatusPaymentRepository
    ) {
    }

    async execute({id, status_payment_id}: IRequest): Promise<void> {
        const statusOrder = await this.statusPaymentRepository.findById(status_payment_id);
        const status_payment = statusOrder.status_payment;
        const payment = await this.paymentsRepository.findById(id);
        if (status_payment === "in_analysis") {
            payment.in_analysis_date = this.dateProvider.dateNow();
        } else if (status_payment === "payed") {
            payment.payed_date = this.dateProvider.dateNow();
        } else if (status_payment === "available") {
            payment.available_date = this.dateProvider.dateNow();
        } else if (status_payment === "in_dispute") {
            payment.in_dispute_date = this.dateProvider.dateNow();
        } else if (status_payment === "returned") {
            payment.returned_date = this.dateProvider.dateNow();
        } else if (status_payment === "cancelled") {
            payment.cancelled_date = this.dateProvider.dateNow();
        }
        await this.paymentsRepository.updateStatus(id, status_payment_id);
    }
}

export {UpdateStatusOrderService};