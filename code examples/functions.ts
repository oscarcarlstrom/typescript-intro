// Funksjoner i TypeScript oppfører seg på samme måte som i JavaScript
// Bortsett fra at man kan definere datatypene funksjonen tar imot
// Utifra input parametere, kan den typisk infere hva den returnerer
// function answer(name: string): "yes" | "no"
function answer(name: string) {
  if (name === "Caroline") {
    return "yes";
  }
  return "no";
}
// const myAnswer: "yes" | "no"
const myAnswer = answer("caroline");
// "yes"
console.log(myAnswer);

// This condition will always return 'false' since the types '"yes" | "no"' and '"hell yes"' have no overlap.
console.log(answer("Caroline") === "hell yes");

// funksjoner kan ha optional parametre
function drinkMore(name?: string) {
  if (name === "BoJack") {
    return "ofc";
  }
  return "depends...";
}
// "depends..."
console.log(drinkMore());

// TypeScript har også støtte for default parametre
// Og vil da infere typen basert på default parameteret du gir
function yourName(firstName: string, lastName = ""): string {
  return `${firstName} ${lastName}`;
}
// "Mr. "
console.log(yourName("Mr."));
