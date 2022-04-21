import { Box, Flex, Heading, Text, Button, Center, Link } from "@chakra-ui/react";
import { ContactForm } from "./ContactForm";

export const Contact = ({ ...props }) => {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            minH="100vh"
            py="50px"
            {...props}
            fontFamily="Raleway"
            fontWeight="400"
            id="about"
        >
            <Box pt={["20px", "20px", "20px", 0]} textAlign="center" w={["300px", "350px", "750px", "900px"]}>
                <Heading as="h1" fontFamily="Raleway" fontSize="20px">
                    A propos
                </Heading>
                <div className="separator"></div>
                <ContactForm />
            </Box>
        </Flex>
    );
};
