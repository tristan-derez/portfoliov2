//chakra
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";

//icons
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { notifyManager } from "react-query";

export const Contact = ({ ...props }) => {
    return (
        <Flex
            mt="300px"
            justifyContent="center"
            minH="100vh"
            {...props}
            fontFamily="Raleway"
            fontWeight="400"
            id="contact"
        >
            <Box textAlign="center" w={["300px", "375px", "600px", "730px"]}>
                <Heading as="h2" fontFamily="Raleway" fontSize="22px">
                    Contact
                </Heading>
                <div className="separator"></div>
                <Box py={["150px", "250px"]} fontSize={["22px", "30px"]} fontWeight="bold">
                    <Link
                        href="mailto:tristan.derez@gmail.com"
                        textDecoration="none"
                        _hover={{ textDecoration: "none" }}
                    >
                        Laissez moi un <span className="importantName">message</span>
                    </Link>
                </Box>
                <div className="separator"></div>
                <Flex gap="20px" justifyContent="center" pt="15px">
                    <Link href="https://www.linkedin.com/in/tristan-derez/" isExternal>
                        Linkedin
                    </Link>
                    <Link href="https://www.linkedin.com/in/tristan-derez/" isExternal>
                        GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/tristan-derez/" isExternal>
                        Twitter
                    </Link>
                    <Link href="https://www.linkedin.com/in/tristan-derez/" isExternal>
                        Instagram
                    </Link>
                </Flex>
            </Box>
        </Flex>
    );
};
