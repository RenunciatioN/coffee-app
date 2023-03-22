import Header from "./header/Header";

import style from "./Layout.module.scss";

const Layout = ({ children }) => {
	return (
		<div className={style.layout}>
			<main>
				<Header />
				<section className={style.content}>{children}</section>
			</main>
		</div>
	);
};

export default Layout;
