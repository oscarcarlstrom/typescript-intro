import ListItem, { Item } from "./listItem";

export default (items: Item[] = []) => {
  const ul = document.createElement("ul");
  items.forEach((values) => {
    const item = ListItem(values);
    ul.appendChild(item);
  });
  return ul;
};
