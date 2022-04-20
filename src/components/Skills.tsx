import { Box, Flex, Heading, Grid, Image } from "@chakra-ui/react";

export const Skills = ({ ...props }) => {
    return (
        <Flex
            flexDirection={["column", "column", "column", "row-reverse"]}
            alignItems="center"
            justifyContent="center"
            py="50px"
            {...props}
            id="about"
        >
            <Box pt={["20px", "20px", "20px", 0]} textAlign="center" w={["300px", "350px", "500px", "750px"]}>
                <Heading as="h1" fontFamily="Zen Kaku Gothic Antique" fontSize="20px">
                    Outils et langages
                </Heading>
                <div className="separator"></div>
                <Grid
                    fontFamily="Zen Kaku Gothic Antique"
                    pt="15px"
                    gridTemplateColumns="repeat(3,33.33%)"
                    gap="15px 0"
                    justifyItems="center"
                >
                    <Box boxSize="50px">
                        <Image src="/images/icons/html-icon.png" alt="html icon" />
                    </Box>
                    <Box boxSize="50px">
                        <Image src="/images/icons/css-icon.png" alt="css icon" />
                    </Box>
                    <Box boxSize="50px">
                        <Image src="/images/icons/javascript-icon.png" alt="javascript icon" />
                    </Box>
                    <Box boxSize="50px">
                        <Image src="/images/icons/react-icon.png" alt="react icon" />
                    </Box>
                    <Box boxSize="50px">
                        <Image src="/images/icons/nodejs-icon.png" alt="nodejs icon" />
                    </Box>

                    <Box boxSize="50px">
                        <Image src="/images/icons/terminal-icon.png" alt="terminal icon" />
                    </Box>

                    <Box boxSize="50px">
                        <Image src="/images/icons/vsl-icon.png" alt="vsl icon" />
                    </Box>

                    <Box boxSize="50px">
                        <Image src="/images/icons/git-icon.png" alt="git icon" />
                    </Box>

                    <Box boxSize="50px">
                        <Image src="/images/icons/github-icon.png" alt="github icon" />
                    </Box>
                </Grid>
            </Box>
        </Flex>
    );
};
