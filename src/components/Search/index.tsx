import { useState, FormEvent, KeyboardEvent } from 'react'
import './styles.css'

type Props = {
    loadUser: (userName: string) => Promise<void>;
}

export function Search({ loadUser }: Props) {
    const [isLoading, setIsLoading] = useState(false)
    const [userName, setUserName] = useState("")
    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setError(null)
        setIsLoading(true)
        try {
            await loadUser(userName)
        } catch (err) {
            setError('Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.')
        } finally {
            setIsLoading(false)
            setUserName("")
        }
    }

    function handleKeyDown(e: KeyboardEvent) {
        if (e.key === '13') {
            setIsLoading(true)
            loadUser(userName)
            setIsLoading(false)
            setUserName("")
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
            {error && <div className='error'>{error}</div>}
        </form>
    )
}