import "./index.css";
import ToDoJS from "./js-components/toDo";
import ToDoTS from "./ts-components/toDo";

const randomDate = () =>
  new Date(+new Date() - Math.floor(Math.random() * 10000000000));

const data = [
  {
    value: "Toilet paper",
    createdAt: randomDate(),
  },
  {
    value: "Keep distance",
    createdAt: randomDate(),
  },
  {
    value: "Fix that broken thing",
    createdAt: randomDate(),
  },
];

const widgets = document.getElementById("todo-widgets");
widgets.appendChild(ToDoJS(data));
widgets.appendChild(ToDoTS(data));
