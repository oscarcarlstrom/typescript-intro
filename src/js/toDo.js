import Heading from "./heading";
import List from "./list";
import NewItem from "./newItem";

export default (initialList) => {
  const toDo = document.createElement("div");
  toDo.setAttribute("id", "js-todo");
  const heading = Heading("To do");
  toDo.appendChild(heading);

  const ul = List(initialList);
  const newItem = NewItem(ul);
  toDo.appendChild(newItem);
  toDo.appendChild(ul);

  return toDo;
};
