import {Status} from "../entities/Order";
import {Product} from "../../products/entities/Product";

interface ICreateOrdersDTO {
    id?: string;
    user_id: string;
    payment_id: string;
    delivery_id: string;
    coupon_code?: string;
    status: Status;
    value: number;
    products?: Product[];
}

export { ICreateOrdersDTO };