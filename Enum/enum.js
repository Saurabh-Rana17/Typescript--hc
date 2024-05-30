"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let role: "teacher" | "student" | "hod";
// role = "teacher";
var tup;
tup = ["dhsjds", "232", 23, 3213];
tup.pop();
tup.push("dsd");
// console.log(tup);
var Role;
(function (Role) {
    Role["teacher"] = "dsi";
    Role[Role["admin"] = 5] = "admin";
    Role[Role["studentr"] = 6] = "studentr";
})(Role || (Role = {}));
var user = Role.studentr;
console.log(user);
