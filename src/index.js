import "./index.css";
import ToDoJS from "./js/components/toDo";
import ToDoTS from "./ts/components/toDo";

const app = document.getElementById("app");

app.appendChild(ToDoJS());
app.appendChild(ToDoTS());
