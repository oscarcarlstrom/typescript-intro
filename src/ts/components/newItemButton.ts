export default (addItem: () => void) => {
  const button = document.createElement("button");
  button.setAttribute("aria-label", "Add");
  button.addEventListener("click", addItem);
  return button;
};
