import "./App.css";

import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import { Navbar } from "./components/Navbar";
import { Welcome } from "./components/Welcome";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

const theme = extendTheme({ config: { initialColorMode: "light" } });

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Flex direction="column" boxSize="100%">
                    <Navbar />
                    <Welcome />
                    <AboutMe />
                    <Projects />
                    <Contact />
                </Flex>
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
