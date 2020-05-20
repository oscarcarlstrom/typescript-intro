import ListItem from "./listItem";
import Input from "./newItemInput";
import Button from "./button";

export default (ul: HTMLUListElement) => {
  const form = document.createElement("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  const input = Input("New todo", "Enter your next todo...");
  form.appendChild(input);

  const addItem = () => {
    if (input.value.length === 0) return;
    const li = ListItem({ value: input.value, createdAt: new Date() });
    //Argument of type '{ value: string; }' is not assignable to parameter of type 'Item'.
    //Property 'createdAt' is missing in type '{ value: string; }' but required in type 'Item'
    // const li2 = ListItem({ value: input.value });

    input.value = null;
    ul.appendChild(li);
  };
  const button = Button(addItem, "Add");

  form.appendChild(button);

  return form;
};
