type User = {
    id : string
}

const users: User[] = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
];

const filterUsersById1 = (id: string) => {
  return users.filter((user) => user.id === id);
};

// can rename id parameter by clicking F2 or rename symbol
const filterUsersById = (userIdToFilterBy: string) => {
  return users.filter((user) => user.id === userIdToFilterBy);
};
