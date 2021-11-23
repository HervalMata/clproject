import {Product} from "../../products/entities/Product";

interface ICreateOrdersDTO {
    id?: string;
    code: string;
    user_id: string;
    payment_id: string;
    delivery_id: string;
    coupon_code?: string;
    status_order_id?: string;
    value: number;
    products?: Product[];
}

export { ICreateOrdersDTO };