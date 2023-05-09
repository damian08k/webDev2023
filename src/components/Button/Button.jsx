import "./Button.css";
import { checkPropsValues } from "./helpers/checkPropsValues";

/* Button props:
1. mode -> "button" or "link" or "link-button"
2. variant -> "light" or "dark"
3. onClick -> for button
4. href -> for link
5. ariaLabel -> string
6. disabled -> boolean
7. testId -> added just in case future testing is desired. string
8. fontWeight -> number, 400 by default
9. fontSize -> number, 1.2rem by default, only for "link" and "link-button"
10. textTransform -> string, uppercase by default
11. type -> only for buttons
*/

export const Button = ({
  children,
  mode,
  variant,
  ariaLabel,
  disabled,
  onClick,
  href,
  testId,
  fontWeight,
  fontSize,
  textTransform,
  type,
}) => {
  checkPropsValues(
    mode,
    variant,
    ariaLabel,
    disabled,
    fontWeight,
    fontSize,
    textTransform
  );

  if (mode === "button") {
    return (
      <button
        className={`button ${variant}`}
        style={{
          fontWeight: fontWeight ?? 400,
          textTransform: textTransform ?? "uppercase",
        }}
        aria-label={ariaLabel}
        onClick={onClick}
        data-testid={testId}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  if (mode === "link" || mode === "link-button") {
    return (
      <a
        className={`${mode} ${variant}`}
        href={href}
        aria-label={ariaLabel}
        data-testid={testId}
        style={{
          fontWeight: fontWeight ?? 400,
          fontSize: fontSize ?? "1.2rem",
          textTransform: textTransform ?? "uppercase",
        }}
      >
        {children}
      </a>
    );
  }
};
