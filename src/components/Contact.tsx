//chakra
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";

//icons
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export const Contact = ({ ...props }) => {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            minH="100vh"
            {...props}
            fontFamily="Raleway"
            fontWeight="400"
            id="contact"
        >
            <Box pt={["20px", "20px", "20px", 0]} textAlign="center" w={["300px", "375px", "600px", "730px"]}>
                <Heading as="h2" fontFamily="Raleway" fontSize="22px">
                    Contact
                </Heading>
                <div className="separator"></div>
                <Text pt="15px">
                    Laissez moi un <Link>message</Link>
                </Text>
            </Box>
        </Flex>
    );
};
