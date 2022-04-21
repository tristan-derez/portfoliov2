//chakra
import { Box, Flex, Heading, useToast } from "@chakra-ui/react";

// components
import { ContactForm } from "./ContactForm";

//icons
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export const Contact = ({ ...props }) => {
    const toast = useToast();
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
            <Box pt={["20px", "20px", "20px", 0]} textAlign="center" w={["300px", "350px", "750px", "900px"]}>
                <Heading as="h2" fontFamily="Raleway" fontSize="22px">
                    Contact
                </Heading>
                <div className="separator"></div>

                <ContactForm />
            </Box>
        </Flex>
    );
};
