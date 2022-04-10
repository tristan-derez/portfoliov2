import "../App.css";

import { Flex } from "@chakra-ui/react";

import { Cursor } from "./Cursor";
import { Navbar } from "./Navbar";
import { AboutMe } from "./AboutMe";

export const Home = () => {
    return (
        <Flex direction="column">
            <Navbar />
            <AboutMe />
            <Cursor />
        </Flex>
    );
};
