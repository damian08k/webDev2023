export const contactFormModel = [
  {
    id: 1,
    type: "text",
    className: "contactFormInput name",
    placeholder: "First Name",
    required: true,
    ariaLabel: "first name",
  },
  {
    id: 2,
    type: "text",
    className: "contactFormInput lastName",
    placeholder: "Last Name",
    required: true,
    ariaLabel: "last name",
  },
  {
    id: 3,
    // can be switch to type: "tel" if tel pattern will be decided
    // then we can add pattern attribute here and in FormInput component
    type: "text",
    className: "contactFormInput ",
    placeholder: "Phone number",
    required: true,
    ariaLabel: "phone number",
  },
  {
    id: 4,
    type: "text",
    className: "contactFormInput ",
    placeholder: "What service are you interested in?",
    required: true,
    ariaLabel: "what service are you interested in?",
  },
];
