import FormInput from "../../../../components/formInput";
import { contactFormModel } from "../../../../models/contactForm.model";
import "./ContactForm.css";

export const ContactForm = () => {
  return (
    <form className="contactForm">
      {contactFormModel.map(
        ({ id, className, type, placeholder, required, ariaLabel }) => {
          return (
            <FormInput
              key={id}
              className={className}
              type={type}
              placeholder={placeholder}
              required={required}
              ariaLabel={ariaLabel}
            />
          );
        }
      )}
      <button type="submit" className="submitButton">
        SUBMIT NOW
      </button>
    </form>
  );
};
