const score1: number[] = [1, 2, 3, 4, 4];
const score2: Array<string> = ["dsk", "fsd", "ds"];

function indentityOne(val: number | string): number | string {
  if (typeof val === "number") {
    return val;
  }
  return val;
}

function indentityTwo(val: any): any {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val;
}

function indentityThree<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  radius: number;
}

const bot1: Bottle = {
  brand: "abibas",
  radius: 12,
};

const bot2: Bottle = {
  brand: "Nice",
  radius: 10,
};

indentityThree<Bottle>(bot1);

function getSearchProducts<T, U>(val: T[]): T {
  const index = 3;
  return val[index];
}

getSearchProducts<Bottle, number>([bot1, bot2]);

const getMoreSearchProducts = <T>(val: T[]): T => {
  const index = 89;
  return val[index];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

const getAnotherFunction = <T, U extends Database>(
  val1: T,
  val2: U
): object => {
  return {
    val1,
    val2,
  };
};

// getAnotherFunction(12, {});
interface Quizzes {
  name: string;
  marks: number;
}

interface Courses {
  name: string;
  teacher: number;
  price: number;
}

class Sellable<T> {
  cart: T[];
  addToCart(val: T): T[] {
    this.cart.push(val);
    return this.cart;
  }
}
