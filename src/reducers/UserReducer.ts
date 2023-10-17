import { IUser } from "../types/IUser";
import { UserActions } from "../types/IUserActions";

export const UserReducer = (user: IUser | null, action: UserActions) => {
    switch(action.type) {
        case 'get':
            return action.payload.user
        default:
            return user
    }
}