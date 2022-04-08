import "../App.css";

import { Flex } from "@chakra-ui/react";

import { Cursor } from "./Cursor";

export const Home = () => {
    return (
        <Flex direction="column">
            <Cursor />
        </Flex>
    );
};
