
const getUser = (id: string): User => {
  // function body
  return { id : "123" };
};

const getAsyncUser = async (id: string): Promise<User> => {};
  const user = await db.users.get(id);

  return user;
};