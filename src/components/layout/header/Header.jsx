

import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";

import style from './Header.module.scss'

const Header = () => {
	return (
		<header className={style.header}>
			<Menu />
			<Search />
			<Cart />
		</header>
	);
};

export default Header;
