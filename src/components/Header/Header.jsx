import "./Header.css";
import logo from "../../assets/logo.jpg";
import logout from "../../assets/icons/logout.png"

function Header() {
    return (
        <>
            <div className="header">
                <nav className="navbar">
                    <div >
                        <img className="navbar__logo" src={logo} />
                    </div>
                    <div className="navbar__items">
                        <ul className="navbar__links">
                            <li>PRODUCTS</li>
                            <li>CONTACT</li>
                            <li><img className="navbar__logout" src={logout}/></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;
