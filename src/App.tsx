import { Card } from './components/Card';
import { Search } from './components/Search';
import { useUser } from './hooks/useUser';
import './App.css'
import { useState } from 'react';

export default function App() {
  const userCtx = useUser()
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState<string | null>(null)
  const [cache, setCache] = useState<Record<string, any>>({})

    async function loadUser(userName:string) {
        setError(null)
        setIsLoading(true)

        // Verifica se o usuário já está em cache
        if (cache[userName]) {
          userCtx?.dispatch({
            type: 'get',
            payload: {
              user: cache[userName]
            }
          })
          setIsLoading(false)
          return
        }

        const res = await fetch(`https://api.github.com/users/${userName.trim()}`)
        
        if(res.status === 404){
            setIsLoading(false)
            setError('Usuário não encontrado, tente novamente.')
            return
        }
        if (!res.ok) {
            setIsLoading(false)
            setError('Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.')
            return
        }

        const data = await res.json();
      
        // Armazena o resultado em cache
        setCache(prev => ({ ...prev, [userName]: data }))
        
        userCtx?.dispatch({
          type:'get',
          payload: {
            user: data
          }
        })
        
        
        setIsLoading(false)
    }
  
  return (
    <div className="App">
      <h1>GitHubers</h1>
      <Search loadUser={loadUser}/>
      {isLoading && <div className='loading'>Procurando usuário...</div>}
      {error && <div className='error'>{error}</div>}
      {userCtx?.user && <Card user={userCtx.user}/>}
    </div>
  );
}
