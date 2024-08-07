let one = "Apple"               //Literal/String
let two = new String("Apple")   //Object
console.log(one == two);        //Compares the values alone so true
console.log(one === two);       //Compares the values n types so false

let num = 1;                    //Number
let numStr = "1";               //String 
console.log(num == numStr);     //Compares the values alone so true
console.log(num === numStr);    //Compares the values n types so false

//Concat
let fName = "Haris"
let lName = " k"
console.log(fName.concat(lName));
console.log(fName);                 //Strings are immutable

let concatName = fName.concat(lName)
console.log(concatName);            //Haris K


let str1 = "hello welcome to Hell"
console.log(str1.startsWith("hello"));      //Gives boolean value
console.log(str1.endsWith("Hell"));         //Gives boolean value

console.log(str1.search("w"));   