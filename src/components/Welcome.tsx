import { Flex, Text } from "@chakra-ui/react";
// import { BouncingArrow } from "./BoucingArrow";

export const Welcome = () => {
    return (
        <Flex minH="100vh" justifyContent="center" alignItems="center" fontFamily="Raleway" fontWeight="600">
            <Flex direction="column" h="inherit" w={["300px", "450px", "600px", "850px"]}>
                <Flex>
                    <Text fontSize={["40px", "56px", "80px", "115px"]} lineHeight="1">
                        Bienvenue
                    </Text>
                </Flex>
                <Flex justifyContent={["flex-start", "flex-start", "flex-end"]}>
                    <Text fontSize={["40px", "56px", "80px", "115px"]} lineHeight="1" fontWeight="300">
                        sur le portfolio
                    </Text>
                </Flex>
                <Flex>
                    <Flex fontSize={["40px", "56px", "80px", "115px"]} lineHeight="1" fontWeight="300">
                        de <span className="importantName">Tristan Derez</span>
                    </Flex>
                </Flex>
                <Flex justifyContent="flex-end">
                    <Text
                        fontSize={["4rem", "3.5rem", "5.5rem", "7.1rem"]}
                        lineHeight={["2", "2", "1"]}
                        _hover={{ transform: "rotate(15deg)", cursor: "crosshair" }}
                    >
                        ✌️
                    </Text>
                </Flex>
                {/* <Flex fontSize="30px" position="relative" bottom="0" margin="0 auto">
                    <BouncingArrow />{" "}
                </Flex> */}
            </Flex>
        </Flex>
    );
};
