let fruits = ["sd","szd","ds","sdfed"]

let a = fruits[0]
console.log(a);

let [one] = fruits
console.log(one);           //sd

let [one1, two] = fruits    //This used for window handling        
console.log(one1, two);     //sd, szd 

let [first,,third] = fruits

let [aa, ...rest] = fruits  //[] for arrays
console.log(rest);          //Print other than aa

//Object Destructing

let uniqueNum = getRanNumber();


const myBio = {

    [uniqueNum]: {
        fName: "hell",
        lName: "heaven"
    },

    // ok: {
    //     fName: "hell",
    //     lName: "heaven"
    // },

    age: 22,
    gender: "M"
}

let {age, gender} = myBio
console.log(age, gender);

//let {uniqueNum: {fName, lName}} = myBio
console.log(myBio.u);
//console.log(myBio.ok.fName, myBio.ok.lName);

//UUID
function getRanNumber(){
    const num = Math.random() * 3434;
    return num.toString();
}

console.log(getRanNumber());