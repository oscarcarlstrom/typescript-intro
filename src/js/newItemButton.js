export default (addItem) => {
  const button = document.createElement("button");
  button.setAttribute("aria-label", "Add");
  button.addEventListener("click", addItem);
  return button;
};
