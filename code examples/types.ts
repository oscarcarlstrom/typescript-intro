// types fungerer nesten på samme måte som interfaces
type Labrador = {
  sayBark: () => void;
};

type Golden = {
  isFloofy: boolean;
};

const dog: Labrador = {
  sayBark: () => console.log("bark"),
};
console.log(dog.sayBark());

// Typer kan ikke ha identisk navn, i motsetning til interfaces som merger interfaces med samme navn
// De kan siden v2.7 extendes, men med en ikke like pen syntax som interfaces

type Retriever = Golden & { retrieve: (item: string) => void };

// Type '{}' is not assignable to type 'Retriever'.
// Property 'isFloofy' is missing in type '{}' but required in type 'Golden'.ts(2322)
// types.ts(7, 3): 'isFloofy' is declared here.
const golden: Retriever = {};
