class Mobile{

    PhoneName = "OnePlus"           //No datatype declaration needed inside class
    #PIN = 1111                     // # indicates private variable
    PhoneNumber

    makeCall(){                     //No need of function keyword declaration inside class
        console.log("Calling someone........");
    }

    // sendSms(){
    //     console.log("sebding sms.......");
    // }                                           //Method overloading not possible

    sendSms(phoneNum){
        console.log("sebding sms to....."+ phoneNum);
    }

    getPIN(){
        return this.#PIN;               //To access the private varaible creating the method by using this keyword to point 
                                        //the variable in the class
    }

    getPhoneName(){
        return this.PhoneName;
    }

    //Getter n setters
    set setPhoneNumber(value){          //Use keyword set and use the params to accept input and assign the input
        this.PhoneNumber=value          //to PhoneNumber variable using this keyword
    }

    get getPhoneNumber(){
        return this.PhoneNumber;
    }

}

exports.MOB = Mobile;

//Mobile myMobile = new Mobile() 
const myMobile = new Mobile()       //Declare the object by assigning it as const not by class name mobile
console.log(myMobile.PhoneName);    //Call the variable by ref var . variable
myMobile.makeCall()                 //Calling methods

//Access private variables
myMobile.sendSms(343434)
console.log(myMobile.PIN);          //It will thow an error cuz its private varaible
console.log(myMobile.getPIN());     //To access the private varaible creating the method

console.log(myMobile.getPhoneName());       //To return the variable value using method

//Getter n Setter
myMobile.PhoneNumber = 897986868686         //Setter is not a method so assign it like varaible
console.log(myMobile.getPhoneNumber);       //Getter is not a method so call it like variable 