export default (ariaLabel: string, placeholder?: string) => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("aria-label", ariaLabel);
  input.setAttribute("placeholder", placeholder);
  //Expected 2 arguments, but got 1 .ts(2554)
  //input.setAttribute("placeholder");
  return input;
};
