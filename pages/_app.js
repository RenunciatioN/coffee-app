import { ChakraProvider } from "@chakra-ui/react";

import '../src/firebase/firebase'
import "../src/styles/globals.scss";

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
