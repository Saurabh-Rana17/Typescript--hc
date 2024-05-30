export {};
let score: number | string = 44;
score = 3;
score = "Zero";

type User = {
  name: string;
  userid: number;
};

type Admin = {
  userName: string;
  adminId: number;
};

let newUser: User | Admin = { adminId: 0, userName: "" };

newUser = {
  name: "sdhu",
  userid: 3,
};
type Arr = {
  readonly a: number[];
};

const arrobj: Arr = {
  a: [3, 5345, 5, 45, 53, 4, 3, 4],
};
arrobj.a.pop();
// console.log(arrobj.a);

// function test(val: number | string): number | string {
//   if (typeof val === "string") {
//     val.charAt(0);
//   }

//   return val;
// }

const a: (number | string)[] = [4, 5345, 5, 54, 5, "fsd", "fsdfsdew"];
