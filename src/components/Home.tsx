import "../App.css";

import { Flex } from "@chakra-ui/react";

import { Cursor } from "./Cursor";
import { Navbar } from "./Navbar";

export const Home = () => {
    return (
        <Flex direction="column">
            <Navbar />
            <Cursor />
        </Flex>
    );
};
