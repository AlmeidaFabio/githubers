import { Card } from './components/Card';
import { Search } from './components/Search';
import { useUser } from './hooks/useUser';
import './App.css'

export default function App() {
  const { user, loadUser, isLoading, error } = useUser()
  
  return (
    <div className="App">
      <h1>GitHubers</h1>
      <Search loadUser={loadUser}/>
      {isLoading && <div className='loading'>Procurando...</div>}
      {error && <div className='error'>Usuário não encontrado, tente novamente.</div>}
      {user && <Card {...user}/>}
    </div>
  );
}
