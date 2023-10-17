import { createContext, useState } from "react";
import { IUser } from "../types/IUser";

type UserContextTypes = {
    user: IUser | null;
    loadUser:(userName:string) => Promise<void>;
    isLoading:boolean;
    error:boolean;
}

type UserContextProvider = {
    children: JSX.Element;
}

export const UserContext = createContext({} as UserContextTypes) 

export function UserContextProvider(props: UserContextProvider) {
    const [ user, setUser ] = useState<IUser | null>(null)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    async function loadUser(userName:string) {
        setUser(null)
        setError(false)
        setIsLoading(true)

        const res = await fetch(`https://api.github.com/users/${userName.trim()}`)
        
        if(res.status === 404){
            setIsLoading(false)
            setError(true)
            return
        }

        const data = await res.json();
        const { avatar_url, login, location, followers, following } = data
        const userData:IUser = {
            avatar_url,
            login,
            location,
            followers,
            following
        }
        
        setIsLoading(false)
        setUser(userData)
    }

    return(
        <UserContext.Provider value={{
            user,
            loadUser,
            isLoading,
            error
        }}>
            { props.children }
        </UserContext.Provider>
    )
}