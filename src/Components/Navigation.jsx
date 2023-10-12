import Logo from '../img/Logo.png';
import './styles/Navigation.css'

const Navigation = () => {
    return (
        <header>
            <nav className="navigation">
                <img src={Logo} alt="Logo" />
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>Product</li>
                    <li>Faq</li>
                    <li>Testimonial</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation