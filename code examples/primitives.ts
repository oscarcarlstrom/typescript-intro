// Type string trivially inferred from a string literal, remove type annotation.
const first: string = "I'll be back.";
const second = "I'm back.";
// I'll be back. I'm back.
console.log(`${first} ${second}`);

// JS skiller ikke på "typen" tall slik som andre språk gjør (int, float etc)
// Så TS følger JavaScript og bruker bare typen: "number"
let decimal = 6;
const hex = 0xf00d;
// false
console.log(decimal === hex);

// Type '"uhu"' is not assignable to type 'number'
decimal = "uhu";

// Boolean
const isDone = false;
// This condition will always return 'false' since the types 'boolean' and 'string' have no overlap.
console.log(isDone === second);

// Array
const terminator = ["Cyborg", "Kill", "Sarah"];
// Argument of type '28031985' is not assignable to parameter of type 'string'
terminator.push(28031985);
// Kan også fortelle hva slags type/typer arrayet kan inneholde
const terminator2: Array<number | string> = ["Cyborg", 2, "Kill", "Child"];
// Cyborg 2 Kill Child
console.log(terminator2.join(" "));

// Egen datatype i TypeScript ikke ulik C#
// Enums er konstanter man ikke kan endre på
enum dogs {
  Labrador,
  GoldenRetriever,
  FlatcoatRetriever,
}

// 2 - default verdi for enums er index iforhold til rekkefølgen
console.log(dogs.FlatcoatRetriever);
// 0
console.log(dogs.Labrador);

// Man kan også assigne strenger
enum animals {
  Horse = "BoJack",
  Cat = "Caroline",
  Labrador = "Peanutbutter",
}
// Caroline
console.log(animals.Cat);
// This condition will always return 'false'
// since the types 'animals.Cat' and 'animals.Horse' have no overlap.
console.log(animals.Cat === animals.Horse);

// Når du ikke vil ta stilling til type definisjon og være shameful kan du bruke: "any"
// Unexpected any. Specify a different type.eslint@typescript-eslint/no-explicit-any
// Using the any type defeats the purpose of using TypeScript.
// When any is used, all compiler type checks around that value are ignored.
// MEN, det kan være kjekt i større eksisterende kodebaser
const SHAME: any = { any: "yes", muchShame: true };
console.log(SHAME);
