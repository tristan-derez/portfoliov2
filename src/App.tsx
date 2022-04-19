import "./App.css";

import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

// import { Cursor } from "./components/Cursor";
import { Navbar } from "./components/Navbar";
import { Welcome } from "./components/Welcome";
import { AboutMe } from "./components/AboutMe";

const theme = extendTheme({ config: { initialColorMode: "light" } });

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Flex direction="column" boxSize="100%">
                    {/* <Cursor /> */}
                    <Navbar />
                    <Welcome />
                    <AboutMe />
                </Flex>
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
