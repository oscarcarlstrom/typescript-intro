export default (text: string) => {
  const heading = document.createElement("h2");
  heading.textContent = text;
  //Hva skjer hvis vi glemmer å returnere heading?
  return heading;
};
