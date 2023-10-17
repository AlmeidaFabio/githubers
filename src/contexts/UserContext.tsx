import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { IUser } from "../types/IUser";
import { UserReducer } from "../reducers/UserReducer";
import { UserActions } from "../types/IUserActions";

type UserContextProps = {
    user: IUser | null;
    dispatch: Dispatch<UserActions>;
}

type UserProviderProps = {
    children: ReactNode;
}

export const UserContext = createContext<UserContextProps | null>(null) 

export function UserProvider({ children }: UserProviderProps) {
    const [ user, dispatch ] = useReducer(UserReducer, null)
    
    return(
        <UserContext.Provider value={{
            user,
            dispatch
        }}>
            { children }
        </UserContext.Provider>
    )
}