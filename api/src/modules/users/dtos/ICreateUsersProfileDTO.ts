interface ICreateUsersProfileDTO {
    id?: string;
    user_id: string;
    cpf: string;
    birth_date: Date;
    phone_number: string;
    avatar?: string;
}

export { ICreateUsersProfileDTO };