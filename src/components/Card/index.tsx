import { UserProps } from '../../types/IUser'
import { MdLocationPin } from 'react-icons/md'
import './styles.css'

export function Card({ 
    login,
    avatar_url,
    location,
    followers,
    following 
}: UserProps) {    
    return(
        <div className="card">
            <div className="img">
                <img src={avatar_url} alt={login} />
            </div>
            <div className="content">
                <div className="details">
                    <h2>{login} <br /><span><MdLocationPin className='pin'/> {location}</span></h2>
                    <div className="data">
                        <h3>{following} <br /><span>Seguindo</span></h3>
                        <h3>{followers} <br /><span>Seguidores</span></h3>
                    </div>
                </div>                
            </div>
        </div>
    )
}