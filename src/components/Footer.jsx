import logo from '../assets/logo-footer.png'

import '../style/components/Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="logo de kasa"></img>
            <h2 className="footer-text">© 2020 Kasa. All rights reserved </h2>
        </footer>
    )
}

export default Footer;