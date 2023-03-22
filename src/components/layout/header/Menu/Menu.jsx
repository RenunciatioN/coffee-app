import Image from "next/image";
import Link from "next/link";

import { menu } from "./menu.data";
import MenuItem from "./Menu-item/Menu-item";

import style from "./Menu.module.scss";

const Menu = () => {
	return (
		<div className={style.menu}>
			<Link href={"/"}>
				<Image
					src="/images/logo.png"
					width={100}
					height={100}
					alt="logo"
					priority={true}
				/>
			</Link>
			<nav>
				<ul>
					<li>
						{menu.map((item) => (
							<MenuItem key={item.link} item={item} />
						))}
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
