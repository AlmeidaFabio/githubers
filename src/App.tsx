import { Card } from './components/Card';
import { Search } from './components/Search';
import { useUser } from './hooks/useUser';
import './App.css'
import { useState } from 'react';

export default function App() {
  const userCtx = useUser()
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState(false)

    async function loadUser(userName:string) {
        setError(false)
        setIsLoading(true)

        const res = await fetch(`https://api.github.com/users/${userName.trim()}`)
        
        if(res.status === 404){
            setIsLoading(false)
            setError(true)
            return
        }

        const data = await res.json();
      
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
      {isLoading && <div className='loading'>Procurando...</div>}
      {error && <div className='error'>Usuário não encontrado, tente novamente.</div>}
      {userCtx?.user && <Card user={userCtx.user}/>}
    </div>
  );
}
