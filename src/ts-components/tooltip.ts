export default (text: string) => {
  const tooltip = document.createElement("div");
  tooltip.textContent = text;
  //Type 'true' is not assignable to type 'string' .ts(2322)
  // tooltip.textContent = true;
  tooltip.classList.add("tooltip");
  return tooltip;
};
