export default (text: string) => {
  const heading = document.createElement("h2");
  heading.textContent = text;
  return heading;
};
