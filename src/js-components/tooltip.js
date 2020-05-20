export default (text) => {
  const tooltip = document.createElement("div");
  tooltip.textContent = text;
  //JS - np!
  // tooltip.textContent = true;
  tooltip.classList.add("tooltip");
  return tooltip;
};
