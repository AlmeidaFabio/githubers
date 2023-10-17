import { IUser } from '../../types/IUser'
import { MdLocationPin } from 'react-icons/md'
import './styles.css'

type Props = {
    user: IUser;
}

export function Card({ user }: Props) {    
    return(
        <div className="card">
            <div className="img">
                <img src={user.avatar_url} alt={user.login} />
            </div>
            <div className="content">
                <div className="details">
                    <h2>{user.login} <br /><span><MdLocationPin className='pin'/> {user.location}</span></h2>
                    <div className="data">
                        <h3>{user.following} <br /><span>Seguindo</span></h3>
                        <h3>{user.followers} <br /><span>Seguidores</span></h3>
                    </div>
                </div>                
            </div>
        </div>
    )
}