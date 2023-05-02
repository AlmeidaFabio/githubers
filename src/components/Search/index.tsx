import { useState, FormEvent, KeyboardEvent } from 'react'
import { useUser } from '../../hooks/useUser';
import './styles.css'

type Props = {
    loadUser:(userName:string) => Promise<void>;
}

export function Search({loadUser}: Props) {
    const { isLoading } = useUser()
    const [ userName, setUserName ] = useState("")

    function handleSubmit(e:FormEvent) {
        e.preventDefault()
        loadUser(userName)
    }

    function handleKeyDown(e:KeyboardEvent) {
        if(e.key === '13') {
            loadUser(userName)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input 
                type="text" 
                autoFocus
                required 
                placeholder='Quem você está procurando?' 
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={handleKeyDown}
                />
                <button type='submit' disabled={isLoading}>
                    {isLoading ? 'Procurando...' : 'Procurar'}
                </button>
            </label>
        </form>
    )
}