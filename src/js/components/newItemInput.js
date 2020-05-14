export default () => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Enter your next todo...");
  input.setAttribute("aria-label", "New todo");
  //Glemte return, returned Input istedenfor input
  return input;
};
