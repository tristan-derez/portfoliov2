import { Box, Center, Heading, Image, Link, Flex, Wrap, WrapItem, Button, Text } from "@chakra-ui/react";
import { Key } from "react";
import { data } from "../data/data.js";
import { FiExternalLink } from "react-icons/fi";

export const Projects = () => {
    return (
        <Flex alignItems="center" justifyContent="center" id="projects">
            <Box pt={["20px", "20px", "20px", 0]} textAlign="center" w={["300px", "350px", "750px", "900px"]}>
                <Heading as="h2" fontFamily="Raleway" fontSize="20px">
                    Projets
                </Heading>
                <div className="separator"></div>
                <Wrap spacing="30px" justify="center" pt="40px">
                    {data.map((data: any, index: Key) => (
                        <ProjectItem key={index} data={data} />
                    ))}
                </Wrap>
            </Box>
        </Flex>
    );
};

const ProjectItem = ({ data }) => {
    return (
        <WrapItem overflow="hidden" borderRadius="5px" fontFamily="Raleway">
            <Center flexDirection="column" width={["400px"]}>
                <Image src={data.imageUrl} alt={data.imageAlt} />
                <Flex direction="column" w="100%" borderTop="2px solid #161619">
                    <Flex
                        color="white"
                        direction="column"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        width="100%"
                        bg="#1A1B21"
                        py="20px"
                    >
                        <Center>{data.title}</Center>
                        <Center pt="20px">
                            <Text>Techs: &nbsp;</Text>
                            <Text color="orange">{data.stackUsed}</Text>
                        </Center>
                        <Center pt="20px" px="20px" textTransform="none" fontWeight="300">
                            <Text></Text>
                            <Text>{data.description}</Text>
                        </Center>
                    </Flex>
                    <Flex justifyContent="center" alignItems="center" gap="20px" py="20px" bg="#161619">
                        <Link href={data.code} isExternal>
                            <Button
                                rightIcon={<FiExternalLink color="white" />}
                                colorScheme="whiteAlpha"
                                color="white"
                                fontWeight="400"
                                h="34px"
                                w={["120px", "140px"]}
                                px="15px"
                            >
                                GitHub
                            </Button>
                        </Link>
                        <Link href={data.adress} isExternal>
                            <Button
                                rightIcon={<FiExternalLink color="black" />}
                                backgroundColor="orange"
                                color="black"
                                _hover={{ bg: "orange.200" }}
                                fontWeight="400"
                                h="34px"
                                w={["120px", "140px"]}
                                px="15px"
                            >
                                Live site
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </Center>
        </WrapItem>
    );
};
