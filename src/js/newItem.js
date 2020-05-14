import item from "./item";
import Input from "./newItemInput";
import NewItemButton from "./newItemButton";

export default (ul) => {
  const form = document.createElement("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  const input = Input();
  form.appendChild(input);

  const addItem = () => {
    if (input.value.length === 0) return;
    const li = item({ value: input.value, createdAt: new Date() });
    input.value = null;
    ul.appendChild(li);
  };
  const button = NewItemButton(addItem);

  form.appendChild(button);

  return form;
};
