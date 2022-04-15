import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CgArrowLongDownL } from "react-icons/cg";

const bounceTransition = {
    y: {
        duration: 0.9,
        yoyo: Infinity,
        ease: "easeOut",
    },
};

export const BouncingArrow = () => {
    return (
        <Flex alignSelf="center">
            <motion.span transition={bounceTransition} animate={{ y: ["50%", "-50%"] }}>
                <CgArrowLongDownL color="orange" />
            </motion.span>
        </Flex>
    );
};
