// Exercise 1 : Optional Funciton parameters
const concatName = (first: string, last?: string) => {
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};

// Exercise 2 : Default Function parameters

const concatName1 = (first: string, last: string = "Pocock") => {
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};

// Exercise 3 : Rest parameters
export function concatenate(...strings: string[]) {
  return strings.join("");
}

// Exercise 4 : Function Type
type User = {
  id: string;
  name: string;
};

const modifyUser = (
  user: User[],
  id: string,
  makeChange: (user: User) => User
) => {
  return user.map((u) => {
    if (u.id === id) {
      return makeChange(u);
    }

    return u;
  });
};

// Exercise 5 : Function returning void
const addClickEventListener = (listener: () => void) => {
  document.addEventListener("click", listener);
};

addClickEventListener(() => {
  console.log("Clicked!");
});


// Exercise 6 : void vs undefined
const acceptsCallback = (callback: () => void) => {
  callback();
};

const returnString = () => {
  return "Hello!";
};

acceptsCallback(returnString);

// Exercise 7 : Type async function
async function fetchData() : Promise<number> {
  const response = await fetch("https://api.example.com/data");

  const data = await response.json();

  return data;
} 