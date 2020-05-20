import { Item } from "./listItem";
import Heading from "./heading";
import List from "./list";
import NewItemForm from "./newItem";

export default (initialList?: Item[]) => {
  const toDo = document.createElement("div");
  toDo.setAttribute("id", "ts-todo");

  const heading = Heading("A heading");
  toDo.appendChild(heading);

  const ul = List(initialList);
  const newItemForm = NewItemForm(ul);
  toDo.appendChild(newItemForm);
  toDo.appendChild(ul);

  return toDo;
};
