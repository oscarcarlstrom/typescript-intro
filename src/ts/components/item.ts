export interface ListItem {
  value: string;
  createdAt: Date;
}

export default ({ value, createdAt }: ListItem) => {
  const li = document.createElement("li");
  li.textContent = value;
  li.setAttribute("title", createdAt.toLocaleDateString());

  const doneButton = document.createElement("button");
  doneButton.setAttribute("aria-label", "Remove");
  doneButton.addEventListener("click", () => {
    li.remove();
  });
  li.prepend(doneButton);
  return li;
};
