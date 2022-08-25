function main() {
  let name: string = "Mohamed";

  let age = 5;

  let married = false;

  let users: string[] = ["mohamed", "ahmed"];

  let user: object = {
    id: 5,
    name: "Mohamed",
    age: 24,
  };

  interface User {
    id: number;
    name: string;
    age?: number;
  }

  type Users = User[];

  let allUsers: Users = [
    { id: 0, name: "x" },
    { id: 1, name: "y", age: 15 },
  ];

  interface Route {
    name: string;
    children: Route[];
  }

  const route: Route = {
    name: "r",
    children: [
      {
        name: "x",
        children: [],
      },
    ],
  };

  console.log(name, age, married, users, user, allUsers);

  function capitalizeName(name: string, age: number): string {
    const f = name[0].toLocaleUpperCase();
    return f + name.slice(1).toLocaleLowerCase() + " age: " + age;
  }

  console.log(capitalizeName("mOHamed", 4));

  interface Node<T> {
    id: number;
    data: T;
  }

  let nodes: Node<string | number>[] = [
    { id: 0, data: "test" },
    { id: 0, data: 5 },
    { id: 0, data: false },
  ];
}

main();
