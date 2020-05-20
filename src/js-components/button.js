export default (addItem, ariaLabel) => {
  const button = document.createElement("button");
  button.addEventListener("click", addItem);
  button.setAttribute("aria-label", ariaLabel);
  // button.setAttribute(ariaLabel, {value: ariaLabel});
  return button;
};
