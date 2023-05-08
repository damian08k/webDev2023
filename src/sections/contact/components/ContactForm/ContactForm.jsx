import FormInput from "../../../../components/formInput";
import "./ContactForm.css";

export const ContactForm = () => {
  return (
    <form className="contactForm">
      <FormInput
        style="full"
        type="text"
        className="contactFormInput name"
        placeholder="First Name"
      />
      <FormInput
        style="full"
        type="text"
        className="contactFormInput lastName"
        placeholder="Last Name"
      />
      <FormInput
        style="full"
        type="text"
        className="contactFormInput"
        placeholder="Phone number"
      />
      <FormInput
        style="full"
        type="text"
        className="contactFormInput"
        placeholder="What service are you interested in?"
      />
      <button type="submit" className="submitButton">
        SUBMIT NOW
      </button>
    </form>
  );
};
