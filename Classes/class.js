"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
var User = /** @class */ (function () {
  function User(name, email) {
    this.courseCount = 1;
    this.city = "";
    this.name = name;
    this.email = email;
  }
  User.prototype.logName = function () {
    console.log(
      "my name is ".concat(this.name, " and my email is ").concat(this.email)
    );
  };
  Object.defineProperty(User.prototype, "getEmail", {
    get: function () {
      return "this is email ".concat(this.email);
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(User.prototype, "getCourseCount", {
    get: function () {
      return this.courseCount;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(User.prototype, "setCourseCount", {
    set: function (input) {
      if (input < 1) {
        throw new Error("Value cannot be less than 0");
      }
      this.courseCount = input;
    },
    enumerable: false,
    configurable: true,
  });
  return User;
})();
var SubUser = /** @class */ (function (_super) {
  __extends(SubUser, _super);
  function SubUser() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  SubUser.prototype.logger = function () {
    console.log("this is", this.city);
  };
  return SubUser;
})(User);
var person = new User("saurabh", "saurabh@gmail.com");
console.log(person.getCourseCount);
try {
  person.setCourseCount = 0;
} catch (error) {
  console.log(error.message, error.name);
}
// console.log(person.getCourseCount);
