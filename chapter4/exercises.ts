// Exercise 1
type ShoppingCart = {
  userId: string;
  // define items type here
  // property : type
  items: string[];
};

const processCart = (cart: ShoppingCart) => {
  // Do something with the cart in here
};

processCart({
  userId: "user123",
  items: ["item1", "item2", "item3"],
});

// Exercise 2

type Recipe = {
  title: string;
  instructions: string;
  // define ingredients type here
  ingredients: { name: string; quantity: string }[];
};

const processRecipe = (recipe: Recipe) => {
  // Do something with the recipe in here
};

processRecipe({
  title: "Chocolate Chip Cookies",
  ingredients: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Sugar", quantity: "1 cup" },
  ],
  instructions: "...",
});

// Exercise 3 : Tuple

const setRange = (range: [number, number]) => {
  const x = range[0];
  const y = range[1];

  // Do something with x and y in here
  // x and y should both be numbers!

  type tests = [
    Expect<Equal<typeof x, number>>,
    Expect<Equal<typeof y, number>>,

  ];
};

// Exercise 4 : Optional Tuple

const goToLocation = (coordinates: [number,number,number?]) => {
  const latitude = coordinates[0];
  const longitude = coordinates[1];
  const elevation = coordinates[2];

  // Do something with latitude, longitude, and elevation in here

  type tests = [
    Expect<Equal<typeof latitude, number>>,
    Expect<Equal<typeof longitude, number>>,
    Expect<Equal<typeof elevation, number | undefined>>,
  ];
};

// Exercise 5 : Passing types to map
const userMap = new Map<number, { name: string; age: number }>();

userMap.set(1, { name: "Max", age: 30 });

userMap.set(2, { name: "Manuel", age: 31 });

// userMap.set("3", { name: "Anna", age: 29 });

userMap.set(3, "123");

// Function Return Types
const addNums = (a : number, b : number) : number => {
  return a + b;
}