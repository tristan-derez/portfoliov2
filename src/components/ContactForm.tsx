//chakra
import { Flex, Button, Icon, useToast, FormLabel, Input } from "@chakra-ui/react";

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
                w={["300px", "375px", "600px", "730px"]}
                fontFamily="Raleway"
                fontSize={["16px", "16px", "20px", "22px"]}
            >
                <FormLabel htmlFor="email"></FormLabel>
                <Input id="email" type="email" name="email" isRequired placeholder="Email" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <Input id="message" name="message" placeholder="Ecrivez-moi 😄" isRequired />
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
