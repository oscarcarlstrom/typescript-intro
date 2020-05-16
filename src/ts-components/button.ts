export default (addItem: () => void, ariaLabel: string) => {
  const button = document.createElement("button");
  button.addEventListener("click", addItem);
  button.setAttribute("aria-label", ariaLabel);
  return button;
};
