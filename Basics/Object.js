//Object
//One Object

let browserSpecs = {
    "name": "chrome",       //Left side keys should be String datatype and function as usual
    "version": 121,
    "vendor": "Google",
    fun: () =>{
        console.log("Anonymous Function");
    }
}

console.log(browserSpecs);              //Returns all key n values in the object
console.log(browserSpecs.name);         //Return specific value
console.log(browserSpecs.vendor);
console.log(browserSpecs.version);
browserSpecs.fun()                      //To call the function inside the object Ex: Obj.function()

//Multiple Object - Array declaration
let multiBrowser = [
    {
        "name": "chrome",       //Left side keys should be String datatype and function as usual
        "version": 121,
    },
    {
        "name": "Edge",       //Left side keys should be String datatype and function as usual
        "version": 121,
    }
]
console.log(multiBrowser);      //It will return list view of objs in [{}, {}]
console.log(multiBrowser[0]);   //It returns first one
console.log(multiBrowser[1]);   //It returns second one
console.log(multiBrowser[0].version);   //To get particular value
console.table(multiBrowser);