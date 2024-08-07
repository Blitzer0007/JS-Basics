class StaticPerson{

    static age = 1;             //Static variable same as java
    static getAge(){
        return this.age++;
    }

}

console.log(StaticPerson.age);          //Static points to class Name and stores the values
console.log(StaticPerson.getAge());
console.log(StaticPerson.getAge());
console.log(StaticPerson.getAge());
console.log(StaticPerson.getAge());



// class Person{

//     age = 1;                        //Non Static Variable
//     getAge(){
//         return this.age++;
//     }

// }

// const just = new Person();          //Creating the obj to call method
// console.log(just.getAge());         //Printing multiple times to print values
// console.log(just.getAge()); 
// console.log(just.getAge()); 

// console.log("<<<---------->>>");

// const just1 = new Person();         //It will start from again like reset as it is non static
// console.log(just1.getAge()); 
// console.log(just1.getAge()); 
// console.log(just1.getAge()); 
