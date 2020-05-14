import Item from "./item";

export default (items = []) => {
  const ul = document.createElement("ul");
  items.forEach((values) => {
    const item = Item(values);
    ul.appendChild(item);
  });
  return ul;
};
