import { IUser } from "./IUser"

type LoadUserAction = {
    type: 'get',
    payload: {
        user: IUser;
    }
}

export type UserActions = LoadUserAction;