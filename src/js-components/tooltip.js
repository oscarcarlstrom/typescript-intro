export default (text) => {
  const tooltip = document.createElement("div");
  tooltip.textContent = text;
  tooltip.classList.add("tooltip");
  return tooltip;
};
