import Item, { ListItem } from "./item";

export default (items: ListItem[] = []) => {
  const ul = document.createElement("ul");
  items.forEach((values) => {
    const item = Item(values);
    ul.appendChild(item);
  });
  return ul;
};
