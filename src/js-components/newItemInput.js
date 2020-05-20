export default (ariaLabel, placeholder) => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("aria-label", ariaLabel);
  input.setAttribute("placeholder", placeholder);
  // input.setAttribute("placeholder");

  return input;
};
