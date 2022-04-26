import "./App.css";

import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import { Navbar } from "./components/Navbar";
import { Welcome } from "./components/Welcome";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const theme = extendTheme({ config: { initialColorMode: "light" } });

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Flex direction="column" boxSize="100%">
                    <header>
                        <Navbar />
                        <Welcome />
                    </header>
                    <main>
                        <AboutMe />
                        <Projects />
                        <Contact />
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </Flex>
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
