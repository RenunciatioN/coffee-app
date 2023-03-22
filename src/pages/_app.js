import { ChakraProvider } from "@chakra-ui/react";

import '../firebase/firebase'
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
