import { Flex, Link } from "@chakra-ui/react";

export const Footer = ({ ...props }) => {
    return (
        <Flex
            justifyContent="center"
            position="relative"
            bottom="40px"
            {...props}
            fontFamily="Raleway"
            fontWeight="bold"
            id="contact"
        >
            <Flex gap="20px" justifyContent="center">
                <Link href="https://www.linkedin.com/in/tristan-derez/" _hover={{ textDecoration: "none" }} isExternal>
                    Linkedin
                </Link>
                <Link href="https://github.com/tristan-derez" _hover={{ textDecoration: "none" }} isExternal>
                    GitHub
                </Link>
                <Link href="https://twitter.com/doreizu" _hover={{ textDecoration: "none" }} isExternal>
                    Twitter
                </Link>
                <Link href="https://www.instagram.com/dreyzu/" _hover={{ textDecoration: "none" }} isExternal>
                    Instagram
                </Link>
            </Flex>
        </Flex>
    );
};
