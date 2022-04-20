import { Box, Flex, Heading, Text, chakra, useColorModeValue, Button, Center, Link } from "@chakra-ui/react";

export const AboutMe = ({ ...props }) => {
    return (
        <Flex alignItems="center" justifyContent="center" py="50px" {...props} id="about">
            <Box pt={["20px", "20px", "20px", 0]} textAlign="center" w={["300px", "350px", "500px", "750px"]}>
                <Heading as="h1" fontFamily="Zen Kaku Gothic Antique" fontSize="20px">
                    A propos
                </Heading>
                <div className="separator"></div>
                <Text fontFamily="Zen Kaku Gothic Antique" fontSize="20px" pt="15px">
                    Étudiant Développeur Front-end, je suis à la recherche d'une entreprise pour m'accueillir en
                    alternance d'un an, au rythme de 3/4 jours en entreprise et le reste en formation avec
                    <AboutMeLink href="https://www.openclassrooms.com">OpenClassrooms</AboutMeLink>.
                </Text>
                <Center pt="15px">
                    <Link href="/cv_derez.pdf" download>
                        <Button
                            borderRadius="30px"
                            mt="40px"
                            padding="15px 50px"
                            variant="outline"
                            _hover={{ bg: "orange" }}
                        >
                            TELECHARGER CV
                        </Button>
                    </Link>
                </Center>
            </Box>
        </Flex>
    );
};

const AboutMeLink = ({ children, ...props }) => {
    const importantWord = useColorModeValue("orange.400", "orange.600");
    return (
        <chakra.a
            color="orange"
            cursor="pointer"
            pl="5px"
            _hover={{
                color: { importantWord },
            }}
            target="_blank"
            {...props}
        >
            {children}
        </chakra.a>
    );
};
