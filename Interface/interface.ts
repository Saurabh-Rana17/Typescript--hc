interface User {
  name: string;
  roll: number;
  email: string;
  isPassed?: boolean;
  addNumber: (a: number, b: number) => number;
  subNumber(c: number, d: number): number;
}

interface User {
  role: "teacher" | "student" | "hod";
}

interface human extends User {
  species: string;
}

let student: human = {
  species: "mammal",
  role: "student",
  name: "saurabh",
  email: "ds",
  roll: 4,
  addNumber: (a = 1, b) => a + b,
  subNumber(a: 10, b: 0) {
    return 0;
  },
};

function addThree(a: number, b: number, c?: number): number {
  if (c) {
    return a + b + c;
  }
  return a + b;
}

console.log(addThree(1, 4));
console.log(addThree(1, 4, 3));

type person = {
  name: string;
  age: number;
  greet(a: number): string;
  act: (b: number) => string;
};

const teacher: person = {
  act(ds) {
    return "acting";
  },
  greet: () => "hello",
  age: 7,
  name: "dsa",
};
