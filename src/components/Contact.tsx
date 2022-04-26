//chakra
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";

export const Contact = ({ ...props }) => {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
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
                <Box fontSize={["22px", "30px"]} fontWeight="bold" pt="50px">
                    <Link
                        href="mailto:tristan.derez@gmail.com"
                        textDecoration="none"
                        _hover={{ textDecoration: "none" }}
                    >
                        Laissez moi un{" "}
                        <Text display="inline-flex" color="orange" _hover={{ color: "orange.400" }}>
                            message
                        </Text>
                    </Link>
                </Box>
            </Box>
        </Flex>
    );
};
