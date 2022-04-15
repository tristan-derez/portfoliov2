import { Box, Flex, Heading, Text, chakra, useColorModeValue, Button, Center, Link } from "@chakra-ui/react";

export const AboutMe = ({ ...props }) => {
    const textlink = useColorModeValue("orange.400", "orange.600");
    return (
        <Flex
            w="100%"
            px="15px"
            flexDirection={["column", "column", "column", "row-reverse"]}
            alignItems="center"
            justifyContent="center"
            {...props}
            id="about"
        >
            <Box pt={["20px", "20px", "20px", 0]} w={["auto", "auto", "700px", "850px"]} textAlign="center">
                <Heading as="h1" fontFamily="Kirang Haerang" fontSize="50px">
                    About me
                </Heading>
                <Text fontFamily="Zen Kaku Gothic Antique" fontSize="20px" mt="15px">
                    Bonjour ! <br />
                    Suite à l'apprentissage en autodidacte du développement Front-End sur
                    <AboutMeLink href="https://codecademy.com" color={textlink}>
                        Codecademy
                    </AboutMeLink>
                    , je me lance dans une formation
                    <AboutMeLink href="https://openclassrooms.com" color={textlink}>
                        OpenClassrooms
                    </AboutMeLink>{" "}
                    en alternance pour consolider et faire certifier mes connaissances.
                    <br />
                    Je cherche donc une alternance d'un an, au rythme de 3-4 jours par semaine en entreprise.
                </Text>
                <Center pt="15px">
                    <Link href="/cv_derez.pdf" download>
                        <Button borderRadius="3xl" px="40px" py="10px" variant="outline" borderColor="black">
                            DOWNLOAD MY RESUME
                        </Button>
                    </Link>
                </Center>
            </Box>
        </Flex>
    );
};

const AboutMeLink = ({ children, ...props }) => {
    return (
        <chakra.a
            cursor="pointer"
            pl="5px"
            _hover={{
                backgroundImage: "url('/images/trace-peinture-orange.png')",
                backgroundSize: "cover",
                backgroundRepeat: "round",
                fontWeight: "bold",
                color: "black",
            }}
            target="_blank"
            {...props}
        >
            {children}
        </chakra.a>
    );
};
