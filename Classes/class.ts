export {};
console.clear();

class User {
  protected courseCount = 1;
  readonly city: string = "";
  constructor(public name: string, public email: string) {}

  logName(): void {
    console.log(`my name is ${this.name} and my email is ${this.email}`);
  }

  get getEmail(): string {
    return `this is email ${this.email}`;
  }

  get getCourseCount(): number {
    return this.courseCount;
  }

  set setCourseCount(input: number) {
    if (input < 1) {
      throw new Error("Value cannot be less than 0");
    }
    this.courseCount = input;
  }
}

class SubUser extends User {
  logger(): void {
    console.log("this is", this.city);
  }
  changeCount(): void {
    this.courseCount = 10;
  }
}

const person = new User("saurabh", "saurabh@gmail.com");
const person2 = new SubUser("wkjesj", "fsk@hfhdks");
