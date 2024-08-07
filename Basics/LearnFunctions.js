//Five ways to declare Function
//1. Function declaration like void Ex: add()
//2. Function declaration with params Ex: add(a,b)
//3. Function assigned to variable
//4. Arrow function by Replacing keyword function with () => 
//5. Anonymous function without any function name n used while callBack

//Function declaration Void

function addition() {
    console.log(1+2);
}
addition()

//Function declaration Params

function additionParams(num1, num2) {
    console.log(num1+num2);
}
additionParams(5,5)                     //if params not entered NaN gets printed

//Function assigned to variable

//add(3,4)                              //ReferenceError: Cannot access 'add' before initialization
let add = function additionAssignToVariable(num1, num2) {
    console.log(num1+num2);
}
add(3,4)                                //It should be called only after initialization line by line execution

//Arrow function by Replacing keyword function n function name if assigned to variable with () => 
let addArrowFunc = (num1,num2) => {
    console.log(num1+num2);
}
addArrowFunc(2,9) 

//Anonymous function without any function name n used while callBack
// () => {
//     console.log("Logic");
// }