export default (ariaLabel, placeholder) => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("aria-label", ariaLabel);
  input.setAttribute("placeholder", placeholder);
  //Glemte return, returned Input istedenfor input
  return input;
};
