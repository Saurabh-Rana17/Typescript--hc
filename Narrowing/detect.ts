// // function detectType(val: number | string) {
// //   if (typeof val === "string") {
// //     return val.toLocaleUpperCase();
// //   }
// //   return val.toFixed(9);
// // }

// // function provideId(id: string | null) {
// //   if (!id) {
// //     return;
// //   }

// //   return id;
// // }

// interface User {
//   name: string;
//   password: string;
// }

// interface Admin {
//   name: string;
//   password: string;
//   isAdmin: Boolean;
// }

// function checkAdmin(val: User | Admin): Boolean {
//   if ("isAdmin" in val) {
//     return val.isAdmin;
//   }

//   return false;
// }

// function checkInstance(val: object) {
//   if (typeof val === "object") {
//     console.log();
//   }
// }

// // checkInstance([2324]);

// type Fish = {
//   swim: () => void;
// };

// type Bird = {
//   fly: () => void;
// };

// function checkBird(val: Bird | Fish): val is Bird {
//   return (val as Bird).fly !== undefined;
// }

// function getFood(val: Bird | Fish) {
//   if (checkBird(val)) {
//     val;
//     return "getting bird food";
//   } else {
//     val;
//     return "getting fish food";
//   }
// }

interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  height: number;
}

type Shape = Circle | Rectangle | Square;

// function getArea(val: Shape): number {
//   if (val.kind === "circle") {
//     return Math.PI * val.radius ** 2;
//   }
//   if (val.kind === "rectangle") {
//     return val.height * val.length;
//   } else {
//     return val.side ** 2;
//   }
// }

function getArea(val: Shape) {
  switch (val.kind) {
    case "circle":
      return Math.PI * val.radius ** 2;
    case "rectangle":
      return val.length * val.height;
    case "square":
      return val.side * val.side;
    default:
      const _defaultShape: never = val;
      return _defaultShape;
  }
}
