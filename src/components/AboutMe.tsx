import { Box, Flex, Heading, Text, chakra, Button, Center, Link } from "@chakra-ui/react";

export const AboutMe = ({ ...props }) => {
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
            <Box pt={["20px", "20px", "20px", 0]} textAlign="center" w={["300px", "375px", "600px", "730px"]}>
                <Heading as="h1" fontFamily="Raleway" fontSize="24px">
                    A propos
                </Heading>
                <div className="separator"></div>
                <Box
                    fontSize={["18px", "18px", "20px", "22px"]}
                    pt="15px"
                    w={["100%", "100%", "90%"]}
                    margin="0 auto"
                    textAlign="justify"
                >
                    Dans le cadre d'une formation Concepteur-Développeur d'application avec l'école{" "}
                    <AboutMeLink href="https://oclock.io/formations/alternance" _hover={{ color: "orange.400" }}>
                        O'clock
                    </AboutMeLink>
                    , je suis à la recherche d'une entreprise pour assurer la partie professionnelle de mon
                    apprentissage. <br />
                    <br />
                    Formation en alternance de 16 mois, 721 heures de formations. <br />
                    <Text color="orange" _hover={{ color: "orange.400" }}>
                        Rythme de l'alternance :
                    </Text>{" "}
                    1 semaine en formation / 2 semaines en entreprise - 3 derniers mois en entreprise. <br />
                    <Text color="orange" _hover={{ color: "orange.400" }}>
                        Au programme :
                    </Text>{" "}
                    PHP - Laravel - Javascript - Vue.js - Node.js - Flutter - Docker - NoSQL - API (Rest, GraphQL,
                    Websockets) <br />
                    <Text color="orange" _hover={{ color: "orange.400" }}>
                        Date :
                    </Text>{" "}
                    du 13.06.2022 au 13.10.2023
                </Box>
                <Center pt="15px">
                    <Button
                        borderRadius="30px"
                        mt="40px"
                        variant="outline"
                        position="relative"
                        overflow="hidden"
                        cursor="pointer"
                        className="main-button"
                    >
                        <Flex
                            w="100%"
                            h="100%"
                            left="-200px"
                            bg="orange.400"
                            position="absolute"
                            transition="all 0.35s ease-Out"
                            bottom="0"
                            _hover={{ left: "0" }}
                            className="slide"
                        ></Flex>
                        <Link
                            href="/CV_Tristan_Derez.pdf"
                            download
                            _hover={{ textDecoration: "none" }}
                            transition="all .35s ease-Out"
                            position="relative"
                            px="10px"
                        >
                            TELECHARGER CV
                        </Link>
                    </Button>
                </Center>
            </Box>
        </Flex>
    );
};

const AboutMeLink = ({ children, ...props }) => {
    return (
        <chakra.a
            color="orange"
            cursor="pointer"
            pl="5px"
            _hover={{
                color: "orange.400",
            }}
            target="_blank"
            {...props}
        >
            {children}
        </chakra.a>
    );
};
