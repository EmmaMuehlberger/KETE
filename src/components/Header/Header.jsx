import { Link } from 'react-router-dom';
import './Header.css';

import logo from "../../img/BKR-Logo-weiss.svg";
import menu from "../../img/menu.png";

const Header = () => {
	return (
		<header className="Header">
            <Link to="./" >
			    <img src={logo} alt="Logo" />
            </Link>
            <img src={menu} alt="Hamburger Menu" />
		</header>
	);
}

export default Header;