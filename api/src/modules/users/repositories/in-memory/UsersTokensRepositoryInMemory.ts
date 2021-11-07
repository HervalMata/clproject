import { ICreateUserTokenDTO } from "../../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../../entities/UserTokens";
import {IUsersTokensRepository} from "../IUsersTokensRepository";

class UsersTokensRepositoryInMemory implements IUsersTokensRepository {
    users_tokens: UserTokens[] = [];

    async create({ expires_date, refresh_token, user_id }: ICreateUserTokenDTO): Promise<UserTokens> {
        const userToken = new UserTokens();
        Object.assign(userToken, { expires_date, refresh_token, user_id });
        this.users_tokens.push(userToken);
        return userToken;
    }

    async deleteById(id: string): Promise<void> {
        const userTokenIndex = this.users_tokens.findIndex((userToken) => userToken.id === id);
        this.users_tokens.splice(userTokenIndex, 1);
    }

    async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
        return this.users_tokens.find((user_token) => user_token.refresh_token === refresh_token);
    }

    async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens> {
        return this.users_tokens.find((user_token) => user_token.user_id === user_id && user_token.refresh_token === refresh_token);
    }

}

export { UsersTokensRepositoryInMemory };