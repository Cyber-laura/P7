import { NavLink } from 'react-router-dom';

import '../style/pages/_Error.scss';

import ErrorImg from '../assets/404.png';

function Error() {
    return (
        <div className='container-error'>
            <img src={ErrorImg} alt='' />
            <p> Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className='error-navlink'>Retourner sur la page d'accueil</NavLink>
        </div>
    )

}
export default Error;