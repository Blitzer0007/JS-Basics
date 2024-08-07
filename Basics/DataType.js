//Let, const, var

let age = 38;
console.log(age);

let age1 = 24;
console.log(typeof age1);       //Typeof keyword to find type of variable
console.log(age1);

age1 = "twenty four";           //Dynamic typecasting no need of explicit mentioning of datatype in JS
console.log(typeof age1);
console.log(age1);

let a = 19;
let b = "19";
console.log(a+b);        //1919 cuz dynamic and no explicit mention of datatype so TypeScript preferred

let isTrue = true;
isTrue = "not true";
console.log(isTrue);     //Not true last defined variable is the one will get executed

let t = true;
let f = false;
console.log(typeof t); //Bool
console.log(typeof f); //Bool

let undef;
console.log(typeof undef);      //Undefined cuz value not initialized

let c = "";
console.log(typeof c);          //Empty string

c = null;   
console.log(typeof null);       //Object

