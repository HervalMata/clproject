import {Type} from "../entities/Address";

interface ICreateAddressDTO {
    id?: string;
    user_id: string;
    type: Type;
    street: string;
    number: number;
    complement?: string;
    district: string;
    postal_code: string;
    city: string;
    state: string;
    country: string;
}

export { ICreateAddressDTO };