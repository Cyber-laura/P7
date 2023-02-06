import { NavLink } from "react-router-dom";
import ErrorImg from "../assets/404.png"

import '../style/pages/Error.scss'

function Error() {
    return (
        <div className="container-error">
            <img src={ErrorImg} alt="" />
            <p className="error-p"> Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="error-navlink">Retourner sur la page d'accueil</NavLink>
        </div>
    )

}
export default Error