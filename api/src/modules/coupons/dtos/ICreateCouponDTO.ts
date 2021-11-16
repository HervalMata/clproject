interface ICreateCouponDTO {
    id?: string;
    code: string;
    type: Type;
    value: number;
    expire_date?: Date;
}

export { ICreateCouponDTO };