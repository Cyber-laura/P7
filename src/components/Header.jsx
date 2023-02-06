import { Link, NavLink } from 'react-router-dom'
import '../style/components/_Header.scss'
import logo from '../assets/logo.png'

function Header() {
    return (
        <header>
            <Link to="/"> <img src={logo} alt="logo de kasa" /></Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' end style={({ isActive }) => ({ textDecoration: isActive ? "underline" : 'none' })}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to='/a-propos' style={({ isActive }) => ({ textDecoration: isActive ? "underline" : 'none' })}>A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;