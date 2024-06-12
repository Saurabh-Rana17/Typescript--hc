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

indentityThree<Bottle>(bot1);
