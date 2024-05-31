"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
var User = /** @class */ (function () {
    function User(name, email) {
        this.city = "";
        this.name = name;
        this.email = email;
    }
    User.prototype.logName = function () {
        console.log("my name is ".concat(this.name, " and my email is ").concat(this.email));
    };
    Object.defineProperty(User.prototype, "getEmail", {
        get: function () {
            return "this is email ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var person = new User("saurabh", "saurabh@gmail.com");
person.logName();
console.log(person.getEmail);
