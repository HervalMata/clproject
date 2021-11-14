import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";

interface IRequest {
    product_id: string;
    is_offer: boolean;
    offer_price?: number;
}

@injectable()
class UpdateOfferProductService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ product_id, is_offer, offer_price }: IRequest): Promise<void> {
        return await this.productsRepository.updateOffer(product_id, is_offer, offer_price);
    }
}

export { UpdateOfferProductService };