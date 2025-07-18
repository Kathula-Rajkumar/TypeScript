1.TypeScript : A common way to use TypeScript is to use the official TypeScript compiler, which transpiles TypeScript code into JavaScript.

2.TypeScript is transpiled into JavaScript using a compiler.

type GreetArg = string | number | boolean;
function greet(id:GreetArg){
  
}

greet(1);
greet("1")


- Rule of thumb

1.Use interface when you’re designing object-oriented code or working with classes.(names, age, objects and etc..)

2.Use type when you need to describe more than just an object — like functions, primitives, or union types.

