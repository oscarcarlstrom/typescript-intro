import Heading from "./heading";
import List from "./list";
import NewItemForm from "./newItem";

export default (initialList) => {
  const toDo = document.createElement("div");
  toDo.setAttribute("id", "js-todo");

  const heading = Heading("To do");
  toDo.appendChild(heading);

  const ul = List(initialList);
  const newItemForm = NewItemForm(ul);
  toDo.appendChild(newItemForm);
  toDo.appendChild(ul);

  return toDo;
};
