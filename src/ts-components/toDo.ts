import Heading from "./heading";
import List from "./list";
import NewItem from "./newItem";
import { ListItem } from "./item";

export default (initialList?: ListItem[]) => {
  const toDo = document.createElement("div");
  toDo.setAttribute("id", "ts-todo");

  const heading = Heading("To do");
  toDo.appendChild(heading);

  const ul = List(initialList);
  const newItem = NewItem(ul);
  toDo.appendChild(newItem);
  toDo.appendChild(ul);

  return toDo;
};
