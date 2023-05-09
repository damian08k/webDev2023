const buttonMode = ["button", "link", "link-button"];
const variantType = ["light", "dark"];

export const checkPropsValues = (
  mode,
  variant,
  ariaLabel,
  disabled,
  fontWeight,
  textTransform
) => {
  if (
    typeof mode !== "string" &&
    (mode !== "button" || mode !== "link" || mode !== "link-button")
  ) {
    throw new Error(`The button mode can be only ${buttonMode.join(", ")}`);
  }

  if (
    typeof variant !== "string" &&
    (variant !== "light" || variant !== "dark" || variant !== "text")
  ) {
    throw new Error(`The variant type can be only ${variantType.join(", ")}`);
  }

  if (typeof ariaLabel !== "string") {
    throw new Error("The aria-label type can only be a string");
  }

  if (disabled !== undefined && typeof disabled !== "boolean") {
    throw new Error("The disabled type can only be a boolean");
  }

  if (fontWeight !== undefined && typeof fontWeight !== "number") {
    throw new Error("The font weight type can only be a number");
  }

  if (textTransform !== undefined && typeof textTransform !== "string") {
    throw new Error("The text transform type can only be a string");
  }
};
