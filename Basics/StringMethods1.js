let str = "welcome";
console.log(str);       //Normal String declaration

let nameObj = new String("Haris")       //Constructor declaration for string
console.log(nameObj);

console.log(typeof str);                //Normal declaration returns String
console.log(typeof nameObj);            //Constructor declaration returns Object

console.log(str.toUpperCase);
console.log(str.toLowerCase);

console.log(str.includes("welcome"));   //To find the presence of char or string

arrWord = "hello;joker;batman"

console.log(arrWord.split(";"));
let words = arrWord.split(";");             //Storing the strings after spliting from array Ex: "Welcome", "to", "home"

words.forEach(element => {
    console.log(element);
});

console.log(str.length);                //To find the length of string

let spaceTrim = " hello ";
console.log(spaceTrim.trim());          //Remove the space at start n end


let lengthOfStr = str.length;
console.log(lengthOfStr);
console.log(str.charAt(lengthOfStr-1));  //To find the last character

console.log(str.substring(0,7));        //To get the sub text by index
console.log(str.replace("home","heaven"));      //Replacing text
