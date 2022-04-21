import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("mayvbqzn");
    if (state.succeeded) {
        return <p>Message envoyé</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea id="message" name="message" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
};
