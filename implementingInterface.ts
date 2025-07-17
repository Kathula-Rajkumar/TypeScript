

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

const e = new Employee("Rajkumar", 21);

console.log(e.name);
console.log(e.age);
e.greet("Hello, my name is");


//outputs 
Rajkumar
21
Hello, my name is Rajkumar
