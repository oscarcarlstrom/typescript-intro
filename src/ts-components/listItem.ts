import Button from "./button";
import Tooltip from "./tooltip";

export interface Item {
  value: string;
  createdAt: Date;
}

export default ({ value, createdAt }: Item) => {
  const li = document.createElement("li");

  const doneButton = Button(() => {
    li.remove();
  }, "Remove");
  li.append(doneButton);

  li.append(value);

  const tooltip = Tooltip(
    `Created ${createdAt.toLocaleDateString().split("/").join(".")}`
  );
  li.append(tooltip);

  return li;
};
