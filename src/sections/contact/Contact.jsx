import Heading from "../../components/heading";
import Text from "../../components/text";
import "./Contact.css";
import { ContactForm } from "./components/ContactForm";

export const Contact = () => {
  return (
    <section className="contact">
      <div className="headingContainer">
        <Heading level={2} className="heading">
          Contact
        </Heading>
        <Text className="text" size="1.4rem">
          Questions or concerns? Just fill out the form below and our support
          team will get back to you within 24 hours
        </Text>
      </div>
      <ContactForm />
    </section>
  );
};
