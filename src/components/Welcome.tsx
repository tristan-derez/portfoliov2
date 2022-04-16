import { Flex, Text } from "@chakra-ui/react";
import { BouncingArrow } from "./BoucingArrow";

export const Welcome = () => {
    return (
        <Flex minH="100vh" justifyContent="center" alignItems="center" fontFamily="HarmondSemi" letterSpacing="-0.8px">
            <Flex direction="column" flexWrap="wrap" whiteSpace="nowrap" fontWeight="bold" minW={["80%", "80%", "60%"]}>
                <Flex>
                    <Text fontSize={["3.5rem", "3.5rem", "4.5rem", "6.5rem"]} lineHeight="1">
                        Bienvenue
                    </Text>
                </Flex>
                <Flex justifyContent={["flex-start", "flex-end", "center"]}>
                    <Text fontSize={["3.5rem", "3.5rem", "4.5rem", "6.5rem"]} lineHeight="1">
                        sur le portfolio
                    </Text>
                </Flex>
                <Flex>
                    <Text fontSize={["3.5rem", "3.5rem", "4.5rem", "6.5rem"]} lineHeight="1">
                        de{" "}
                        <Text display="inline-flex" color="orange">
                            Tristan Derez
                        </Text>
                    </Text>
                </Flex>
                <Flex alignSelf="flex-end">
                    <Text
                        fontSize={["4rem", "3.5rem", "5.5rem", "6.5rem"]}
                        lineHeight={["2", "2", "1"]}
                        _hover={{ transform: "rotate(15deg)", cursor: "crosshair" }}
                    >
                        ✌️
                    </Text>
                </Flex>
            </Flex>
            <Flex position="absolute" bottom="20px" fontSize="30px">
                <BouncingArrow />{" "}
            </Flex>
        </Flex>
    );
};
