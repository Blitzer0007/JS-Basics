//Const
console.log("++++++++++++"+"Constant"+"+++++++++++++++");         

const PanNumber = "ABC231";     //Const value cant be changed again it works like final in Java
console.log(PanNumber);
//PanNumber = "BDJH233";
//console.log(PanNumber);         //TypeError: Assignment to constant variable.

console.log("+++++++++++++"+"Let n Var"+"+++++++++++++");      

var FName = "Haris";
FName="K";
console.log(FName);             //The last of FName will be printed for both let n var

console.log("+++++++++++++"+"Let in Function"+"+++++++++++++");      

function triggerLet() {
    let i=100
    for (let i = 0; i < 5; i++) {   //Let only works within the scope - Local inside the braces
        console.log(i);       
    }
    console.log(i);                 //Defined let variable gets printed
}
triggerLet()

console.log("+++++++++++++"+"Var in Function"+"+++++++++++++");      

function triggerVar() {
    for (var i = 0; i < 5; i++) {   //Var works outside the scope too - Global outside the braces
        console.log(i);             //Var can work outside the inner function
    }
    console.log(i);                 //var variable gets printed as it is global n carries data outside braces 5
}
triggerVar()