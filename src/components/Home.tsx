import "../App.css";

import { Flex, useColorModeValue } from "@chakra-ui/react";

import { Cursor } from "./Cursor";
import { Navbar } from "./Navbar";
import { Welcome } from "./Welcome";
import { AboutMe } from "./AboutMe";

export const Home = () => {
    const homeBackground = useColorModeValue("#FFFDD0", "black");
    return (
        <Flex direction="column" bg={homeBackground}>
            <Navbar />
            <Welcome />
            <AboutMe />
            <Cursor />
        </Flex>
    );
};
