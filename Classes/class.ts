export {};
console.clear();

class User {
  private courseCount = 1;
  protected name: string;
  email: string;
  readonly city: string = "";
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  logName() {
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
}

const person = new User("saurabh", "saurabh@gmail.com");

console.log(person.getCourseCount);
person.setCourseCount = 10;
console.log(person.getCourseCount);
