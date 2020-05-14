import "./index.css";
import ToDoJS from "./js/toDo";
import ToDoTS from "./ts/toDo";

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

const app = document.getElementById("app");

app.appendChild(ToDoJS(data));
app.appendChild(ToDoTS(data));
