import '../style/components/_Footer.scss'

import logo from '../assets/logo-footer.png'

function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} alt='logo de kasa'></img>
            <h2> © 2020 Kasa. All rights reserved </h2>
        </footer>
    )
}
export default Footer;