// Interfaces gir oss muligheten til å beskrive objekter/funksjoner for typescript
// og augmentere dem med informasjon om innholdet
interface GoTWriters {
  Benioff: string;
  Weiss: string;
}

const series: GoTWriters = {
  Benioff: "clown",
  Weiss: "clown",
};

console.log(series);

// Typescript vil advare oss hvis objektet ikke oppfyller gitt interface, hvilket krav den ikke oppfyller, samt hvor interfaces er deklarert
// Property 'Benioff' is missing in type '{ Weiss: string; }' but required in type 'GoTWriters'.
// interfaces.ts(4, 3): 'Benioff' is declared here.
const missingProp: GoTWriters = {
  Weiss: "clown",
};

// Du kan også som i funksjoner ha "optional" properties
interface GoTCharacter {
  name?: string;
  satisfyingArc: boolean;
}

const bran: GoTCharacter = {
  satisfyingArc: false,
};

// Ved hjelp av interfaces kan du spesifisere hva slags objekt du forventer i en funksjon
function isGoodArc(gotCharatcher: GoTCharacter) {
  if (gotCharatcher.satisfyingArc) {
    console.log("false");
  }
  console.log("false");
}

isGoodArc(bran);
// TypeScript vil også infere om objektet du sender inn oppfyller interfacet du har oppgitt
isGoodArc({ name: "Arya", satisfyingArc: false });
// Argument of type '{ dragons: string; satisfyingArc: false; }' is not assignable to parameter of type 'GoTCharacter'.
// Object literal may only specify known properties, and 'dragons' does not exist in type 'GoTCharacter'.
isGoodArc({ dragons: "There be dragons", satisfyingArc: false });

// Interfaces kan også definere at properties kan være readonly
// Beskrive funksjoner, klasser etc
interface GoTLastSeasons {
  readonly shouldHaveBeenMoreEpisodes: boolean;
  sayIt: (whatToSay: string) => void;
}

// TypeScript vil gi en error om ikke klassen inneholder alle properties i interfacet
class SayIt implements GoTLastSeasons {
  shouldHaveBeenMoreEpisodes = true;
  sayIt(whatToSay: string): void {
    console.log(whatToSay);
  }
}

const sayIt = new SayIt();
sayIt.sayIt("Say it!");

// Interfaces kan også extende en til flere interfaces
interface GotFirstSeasons extends GoTLastSeasons, GoTCharacter {
  firstSeasonsIsGood: boolean;
}

// Interfaces med samme navn vil automagisk bli merged
interface GotFirstSeasons {
  why: boolean;
}

// Type '{}' is missing the following properties from type
// 'GotFirstSeasons': firstSeasonsIsGood, why, shouldHaveBeenMoreEpisodes, sayIt, satisfyingArc
const betrayel: GotFirstSeasons = {};
