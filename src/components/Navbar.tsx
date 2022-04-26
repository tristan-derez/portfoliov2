import { Flex, IconButton, Text, Spacer, chakra, useColorMode, useColorModeValue, Button } from "@chakra-ui/react";
import { useState } from "react";

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { SunIcon } from "./icon-components/SunIcon";
import { MoonIcon } from "./icon-components/MoonIcon";

export const Navbar = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    let [display, changeDisplay] = useState("none");
    const mobileSwitch = useColorModeValue("black", "white");
    return (
        <Flex
            pos="fixed"
            w="100%"
            maxWidth="inherit"
            px={["6px", "6px", "40px"]}
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
                fontSize={["16px", "16px", "20px", "20px"]}
                fontFamily="Raleway"
                fontWeight="400"
                letterSpacing="1px"
                display={["none", "none", "flex", "flex"]}
                alignItems="center"
            >
                <CustomLink href="#about">A propos</CustomLink>
                <CustomLink href="#projects">Projets</CustomLink>
                <CustomLink href="#contact">Contact</CustomLink>
            </Flex>
            <Flex alignSelf="center" pl="30px">
                {/* Hamburger Icon/Open Menu Button */}

                <ToggleButton onClick={toggleColorMode}>
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </ToggleButton>
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

// Toggle Light/Dark Mode Button
const ToggleButton = ({ children, ...props }) => {
    return (
        <Button
            m={0}
            p={0}
            bg="none"
            aria-label="toggle light/dark mode"
            variant="ghost"
            _hover={{ bg: "none", color: useColorModeValue("orange.300", "orange.400") }}
            _active={{
                bg: "none",
                transform: "none",
                borderColor: "none",
            }}
            _focus={{
                boxShadow: "none",
            }}
            {...props}
        >
            {children}
        </Button>
    );
};
