import "./Header.css";
import logo from "../../assets/logo.jpg";

function Header() {
    return (
        <>
            <div className="header">
                <nav className="navbar">
                    <div className="navbar__logo">
                        <img src={logo} />
                    </div>
                    <div className="navbar__items">
                        <ul className="navbar__links">
                            <li>HOME</li>
                            <li>PRODUCTS</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;
