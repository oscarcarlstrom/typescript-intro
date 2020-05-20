import ListItem from "./listItem";

export default (items = []) => {
  const ul = document.createElement("ul");
  items.forEach((values) => {
    const item = ListItem(values);
    //const item = ListItem();
    ul.appendChild(item);
  });
  return ul;
};
