let numbers: number = 10;
// let strings: string = "Hello World";

function addNumbers(num: Numbers): number | string {
  // return num.num1 + num.num2;
  const result = num.num1 + num.num2;
  // const result ="num.num1" + "num.num2";

  return result;
}


function subtractNumbers(num: Numbers): number {
  return num.num1 - num.num2;
}

const strings = (str1: string, str2: string): string => {
  return str1 + str2;
};
strings("Hello", "World");

const addition = addNumbers({ num1: 20, num2: 10 });
const subtract: number = subtractNumbers({ num1: 20, num2: 10 });
console.log(addition);
console.log(subtract);

const tuples: [string, number] = ["Hello", 1];
tuples.push("World", 2);
console.log(tuples);

const test: number | string = 0;

console.log(test);

userid(1);
userid("1");

function userid(id: number | string): number | string {
  console.log(id);
  if (typeof id === "number") {
    id.valueOf();
  }
  return id;
}

type Mystring = {
  str: string;
};

type Numbers = {
  num1: number;
  num2: number;
  num3?: number;
};

const arr: (string | number)[] = ["Hello", 1, "World", 2];

interface Users {
  id: number;
  name: string;
  age: number;
  address?: string;
}

interface Users {
  phone: number;
  email: string;
}

interface newUsers extends Users {
  newid?: number;
}
const user: newUsers = {
  id: 1,
  name: "John",
  age: 30,
  phone: 1234567890,
  email: "dsdnsjh@cbdj",
};

function identity<T>(val: T): T {
  return val;
}

const

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

interface Emplpoyee{
  id:number;
  name:string;
  age:number;
  address?:string;
}

type UserEmployee = newUsers & Emplpoyee;

const e:UserEmployee = {
  id:1,
  name:"John",
  age:30,
  phone:1234567890,
  email:"dsdnsjh@cbdj",
}

function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}
console.log(add(1, 2));
console.log(add('Hello', ' World')); 

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);

  return arg;
}


loggingIdentity({ length: 10, value: 3 });
