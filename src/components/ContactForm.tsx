//chakra
import { Flex, Button, Icon, useToast, FormLabel } from "@chakra-ui/react";

//formspree
import { useForm, ValidationError } from "@formspree/react";

//icons
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("mayvbqzn");
    const toast = useToast();
    if (state.succeeded) {
        // return chakra toast
    }
    return (
        <form onSubmit={handleSubmit}>
            <Flex
                direction="column"
                gap="20px"
                color="orange"
                w={["300px", "327px", "573px", "730px"]}
                fontFamily="Raleway"
                fontSize={["16px", "16px", "20px", "22px"]}
            >
                <FormLabel htmlFor="email">Email</FormLabel>
                <input id="email" type="email" name="email" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <textarea id="message" name="message" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <Button
                    type="submit"
                    disabled={state.submitting}
                    onClick={() => {
                        toast({
                            position: "bottom-right",
                            render: () => (
                                <Button color="white" padding={6} bg="#4BB543" margin="10px" fontFamily="Raleway">
                                    Message envoyé
                                    <Icon as={IoCheckmarkDoneCircleSharp} />
                                </Button>
                            ),
                            isClosable: true,
                        });
                    }}
                >
                    Submit
                </Button>
            </Flex>
        </form>
    );
};
