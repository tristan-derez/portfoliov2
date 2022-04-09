import { Flex, IconButton, Image, Link, Text, Spacer, chakra, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export const Navbar = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    let [display, changeDisplay] = useState("none");
    return (
        <Flex
            w="100%"
            pos="fixed"
            px="20px"
            py="10px"
            color={useColorModeValue("black", "white")}
            alignItems="center"
            fontFamily="Zen Kaku Gothic Antique"
        >
            <Flex>
                <Text>Tristan Derez</Text>
            </Flex>
            <Spacer />
            <Flex
                gap="30px"
                pr="30px"
                fontSize="1rem"
                fontFamily="Zen Kaku Gothic Antique"
                letterSpacing="1px"
                display={["none", "none", "flex", "flex"]}
            >
                <HeaderLink href="#about">A propos</HeaderLink>
                <HeaderLink href="#projects">Projets</HeaderLink>
                <HeaderLink href="#contact">Contact</HeaderLink>
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
                />
                {/* Toggle Light/Dark Mode Button */}
                <IconBut
                    isRound="yes"
                    onClick={toggleColorMode}
                    display={["none", "none", "inline-flex", "inline-flex"]}
                    aria-label="toggle light/dark mode"
                >
                    {colorMode === "light" ? <BsMoonStarsFill /> : <BsSunFill />}
                </IconBut>
            </Flex>
            {/* Navbar on mobile device */}
            <Flex
                w="100vw"
                zIndex={20}
                h="100vh"
                pos="fixed"
                inset="0"
                overflow="none"
                flexDir="column"
                display={display}
                color={useColorModeValue("black", "white")}
                background={useColorModeValue("#FFFFFF", "#1A202C")}
                position="absolute"
            >
                <Flex justify="flex-end">
                    {/* Close Icon Button */}
                    <IconButton
                        aria-label="close menu"
                        position="absolute"
                        top="10px"
                        right="20px"
                        size="lg"
                        h="40px"
                        w="40px"
                        icon={<AiOutlineClose />}
                        onClick={() => changeDisplay("none")}
                        _hover={{ bg: "none" }}
                        bg="none"
                    />
                </Flex>
                <Flex direction="column" alignItems="center" pt="100px" gap="25px" fontFamily="Zen Kaku Gothic Antique">
                    <HeaderLink href="#">Home</HeaderLink>
                    <HeaderLink href="#">Contact</HeaderLink>
                </Flex>
            </Flex>
        </Flex>
    );
};

//navbar link
export const HeaderLink = ({ children, ...props }) => {
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
    const background = useColorModeValue("orange.400", "orange.600");
    return (
        <IconButton
            bg={background}
            _hover={{ bg: useColorModeValue("orange.200", "orange.400") }}
            {...props}
            aria-label="toggle light/dark mode"
        >
            {children}
        </IconButton>
    );
};
