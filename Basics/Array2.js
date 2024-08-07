//Predicate - A "predicate" is a function that takes parameters and returns a boolean. 

let fruitsPredNCallBack = ["Apple","Kiwi","Orange","Dragon fruit","Water melon"];

let predicate = (fruit) => {                            //Using arrow function assigning it to variable name
if (fruit === "Kiwi") {
    return true
}
}

//Callback - A "callback" is any function that is passed in as a parameter
let foundFruit = fruitsPredNCallBack.find(predicate)    //Here find is a callback function which accepts another methods as params
                                                        //Find retrive the value cuz predicate doing the boolean work
console.log(foundFruit);                                //Prints kiwi

let foundFruitSL = fruitsPredNCallBack.find(fruit => fruit === "Orange")     //Params n condition for predicate in single line implemenation
console.log(foundFruitSL);

console.log(fruitsPredNCallBack.includes("Kiwi"));      //Returns boolean
console.log(fruitsPredNCallBack.indexOf("Dragon fruit"));       //Gives the index of the value

console.log(fruitsPredNCallBack.sort());        //Alpha sorting
console.log(fruitsPredNCallBack.reverse());

let foundFruitSL1 = fruitsPredNCallBack.some(predicate)
console.log(foundFruitSL1);

let Numbers = [3,4,5,68,45];
//console.log(newMutableArr);

let newMutableArr = Numbers.map((num,index) => {    //Works like foreach 
    console.log(num,index);                         //It will give number n index
    return num + 3;                                 //Arrays are mutable
})

console.log(Numbers);
console.log(newMutableArr);

let filterNums = Numbers.filter(eachValue => eachValue >= 5)    //Predicate so single line  Params => Condition
console.log(filterNums);

//Another way to declare array
let a = new Array(2);
console.log(a);
a.push(3)         //It wil add at the end at will increase the length if array is empty
a[0] = 1          //Index based insertion
a[1] = 2          //Index based insertion
console.log(a);