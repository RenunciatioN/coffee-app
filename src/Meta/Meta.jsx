import Head from "next/head";

const Meta = () => {
	return (
		<Head>
			<title>My coffee</title>
			<link rel="icon" type="image" sizes="32x32" href="./favicon.ico" />
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
		</Head>
	);
};

export default Meta;
