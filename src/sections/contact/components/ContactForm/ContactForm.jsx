import { useState } from "react";
import FormInput from "../../../../components/formInput";
import { contactFormModel } from "../../../../models/contactForm.model";
import "./ContactForm.css";

const initialFormValues = {
  firstName: "",
  lastName: "",
  phone: "",
  service: "",
};

export const ContactForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmitForm = (evt) => {
    // just a simple submitting form function which displays form values in console
    // and clears inputs after submit
    evt.preventDefault();
    console.log(formValues);
    setFormValues(initialFormValues);
  };

  return (
    <form className="contactForm" onSubmit={handleSubmitForm}>
      {contactFormModel.map(
        ({ id, className, type, placeholder, required, ariaLabel, name }) => {
          return (
            <FormInput
              key={id}
              className={className}
              type={type}
              placeholder={placeholder}
              required={required}
              ariaLabel={ariaLabel}
              name={name}
              onChange={handleInputChange}
              value={formValues[name]}
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
