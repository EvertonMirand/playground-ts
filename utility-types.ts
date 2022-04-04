interface MyUser {
  name: string;
  id: string;
  email?: string;
}

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals) => {
  return { ...user, ...overrides };
};

const mergerUser = merge({ name: "John", id: "1" }, { email: "john@jony.com" });

console.log(mergerUser);

type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">;

const mapById = (users: MyUser[]): Record<MyUser["id"], Omit<MyUser, "id">> => {
  return users.reduce((acc, user) => {
    const { id, ...rest } = user;
    return { ...acc, [id]: rest };
  }, {});
};

const mappedUsers = mapById([
  { id: "1", name: "John", email: "john@email.com" },
  { id: "2", name: "Jane", email: "jane@email.com" },
  { id: "3", name: "Jack" },
]);

console.log(mappedUsers);
