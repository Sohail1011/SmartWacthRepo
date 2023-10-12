import PrincipalLogo from "../assets/Logo.svg";

const Navigation = () => {
    return (
        <header>
            <nav className="navigation">
                <img src={PrincipalLogo} alt="Logo" />
            </nav>
        </header>
    )
}

export default Navigation