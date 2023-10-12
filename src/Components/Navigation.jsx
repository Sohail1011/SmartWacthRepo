import Logo from '../img/Logo.png';
import './styles/Navigation.css'

const Navigation = () => {
    return (
        <header>
            <nav className="navigation">
                <img src={Logo} alt="Logo" />
                <ul className='items'>
                    <li><a className='special' href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Faq</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation