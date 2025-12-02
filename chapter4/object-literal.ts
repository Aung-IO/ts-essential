const talkToAnimal = (animal: { name: string; type: string; age: number }) => {
  // rest of function body
};

// optional properties
const talkToPet = (pet: { name: string; type: string; age?: number }) => {
  // rest of function body
};

// default properties
const talkToWildAnimal = (
  wildAnimal: { name: string; type: string; age: number } = {
    name: "Unknown",
    type: "Unknown",
    age: 0,
  }
) => {
  // rest of function body
};

// optional and default properties combined
const talkToPokemon = (
  name: string,
  type = "Pokemon",
  age: number,
  trainer?: string
) => {
  // rest of function body
};
