export default (ariaLabel: string, placeholder?: string) => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("aria-label", ariaLabel);
  input.setAttribute("placeholder", placeholder);
  return input;
};
