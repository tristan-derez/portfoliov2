import { Box, Flex, Heading, Text, chakra, useColorModeValue, Button, Center, Link } from "@chakra-ui/react";

export const AboutMe = ({ ...props }) => {
    return (
        <Flex
            px="40px"
            flexDirection={["column", "column", "column", "row-reverse"]}
            alignItems="center"
            justifyContent="center"
            {...props}
            id="about"
        >
            <Box pt={["20px", "20px", "20px", 0]} textAlign="center">
                <Heading as="h1" fontFamily="Kirang Haerang" fontSize="50px">
                    About me
                </Heading>
                <Text fontFamily="Zen Kaku Gothic Antique" fontSize="20px" pt="15px">
                    Bonjour ! <br />
                    Suite à l'apprentissage en autodidacte du développement Front-End sur
                    <AboutMeLink href="https://codecademy.com">Codecademy</AboutMeLink>, je me lance dans une formation
                    <AboutMeLink href="https://openclassrooms.com">OpenClassrooms</AboutMeLink> en alternance pour
                    consolider et faire certifier mes connaissances.
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
    const importantWord = useColorModeValue("orange.400", "orange.600");
    return (
        <chakra.a
            color="orange"
            cursor="pointer"
            pl="5px"
            _hover={{
                backgroundImage: "url('/images/trace-peinture-orange.png')",
                backgroundSize: "cover",
                backgroundRepeat: "round",
                fontWeight: "bold",
                color: { importantWord },
            }}
            target="_blank"
            {...props}
        >
            {children}
        </chakra.a>
    );
};
