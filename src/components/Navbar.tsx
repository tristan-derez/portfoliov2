import { Flex, IconButton, Text, Spacer, chakra, useColorMode, useColorModeValue, Button } from "@chakra-ui/react";
import { useState } from "react";

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    let [display, changeDisplay] = useState("none");
    const mobileSwitch = useColorModeValue("black", "white");
    return (
        <Flex
            pos="fixed"
            w="100%"
            maxWidth="inherit"
            px="40px"
            py="10px"
            color={useColorModeValue("black", "white")}
            alignItems="center"
            fontFamily="Raleway"
        >
            <Flex>
                {/* <Text fontFamily="Raleway" fontSize="2rem">
                    Tristan Derez
                </Text> */}
            </Flex>
            <Spacer />
            <Flex
                gap="30px"
                fontSize="1rem"
                fontFamily="Raleway"
                fontWeight="400"
                letterSpacing="1px"
                display={["none", "none", "flex", "flex"]}
            >
                <CustomLink href="#about">A propos</CustomLink>
                <CustomLink href="#projects">Projets</CustomLink>
                <CustomLink href="#contact">Contact</CustomLink>
            </Flex>
            <Flex>
                {/* Hamburger Icon/Open Menu Button */}
                <IconButton
                    aria-label="open menu"
                    icon={<GiHamburgerMenu />}
                    display={["flex", "flex", "none", "none"]}
                    onClick={() => changeDisplay("flex")}
                    _hover={{ bg: "none" }}
                    bg="none"
                    color="orange"
                />
            </Flex>
            {/* Navbar on mobile device */}
            <Flex
                w="100vw"
                h="100vh"
                zIndex={20}
                inset="0"
                flexDir="column"
                display={display}
                color={useColorModeValue("black", "white")}
                background={useColorModeValue("white", "#1A202C")}
                position="absolute"
            >
                <Flex justify="flex-end">
                    {/* Close Icon Button */}
                    <IconButton
                        aria-label="close menu"
                        position="absolute"
                        top="10px"
                        right="40px"
                        size="lg"
                        h="40px"
                        w="40px"
                        icon={<AiOutlineClose />}
                        onClick={() => changeDisplay("none")}
                        _hover={{ bg: "none" }}
                        bg="none"
                    />
                </Flex>
                <Flex direction="column" alignItems="center" pt="100px" gap="25px" fontFamily="Raleway">
                    <CustomLink href="#">Home</CustomLink>
                    <CustomLink href="#">Contact</CustomLink>
                </Flex>
            </Flex>
            <Flex position="fixed" bottom="40px" right="40px">
                <Button
                    px="20px"
                    bg="none"
                    borderRadius="30px"
                    variant="outline"
                    borderColor={mobileSwitch}
                    onClick={toggleColorMode}
                    _hover={{ color: "orange" }}
                    aria-label="toggle light/dark mode"
                >
                    {colorMode === "light" ? "Dark" : "Light"}
                </Button>
            </Flex>
        </Flex>
    );
};

//navbar link
export const CustomLink = ({ children, ...props }) => {
    return (
        <chakra.a
            cursor="pointer"
            _hover={{
                fontWeight: "bold",
                transform: "translateY(3px)",
            }}
            {...props}
        >
            {children}
        </chakra.a>
    );
};

export const IconBut = ({ children, ...props }) => {
    return (
        <IconButton
            bg="orange"
            _hover={{ bg: useColorModeValue("orange.200", "orange.400") }}
            {...props}
            aria-label="toggle light/dark mode"
        >
            {children}
        </IconButton>
    );
};
