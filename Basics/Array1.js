//Array
let fruits = ["apple","pineapple","orange","kiwi"]
console.log(fruits.length);                         //Length is the property gives op as 4
console.log(fruits[4-1]);                           //Kiwi
console.log(fruits);                                //Prints in list view

fruits.forEach(eachFruit => {
console.log(eachFruit);                             //Prints each fruits in string    
})

//In built methods
const num1 = [1,2,3,4,5,6]
num1.push(7,8)                                    //Add the values at end
console.log(num1);

num1.pop()                                        //Remove the value at end
console.log(num1);

num1.unshift(-1,0)                                //Add the values at start
console.log(num1);

num1.shift()                                    //Remove the value at start
console.log(num1);

// num1.fill(88)                                     //It will fill the length of the array if only one value declared
// console.log(num1);

num1.fill(88,2,4)                                     //It will fill the value in the index mentioned
console.log(num1);

//Concat
let concatArr = fruits.concat(num1)
console.log(concatArr);

//Join
console.log(fruits.join(' >> '));               //Prints 'apple >> pineapple >> orange >> kiwi'
console.log(typeof fruits.join('>>'));          //Returns string type