export {};
// let role: "teacher" | "student" | "hod";
// role = "teacher";

let tup: [string, string, number, number];
tup = ["dhsjds", "232", 23, 3213];
tup.pop();
tup.push("dsd");
// console.log(tup);

enum Role {
  teacher = "dsi",
  admin = 5,
  studentr,
}

let user = Role.studentr;
console.log(user);
const obj: { key: string } = {
  key: "",
};
