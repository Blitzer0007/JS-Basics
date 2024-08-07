class Mobile{

#PIN;

constructor(pin){                       //Same as java but with keyword constructor
    this.#PIN = pin;                    //Constructor overloading is not possible
}

openApp(){
    if (this.#PIN == 1234) {
        console.log("Open App");
        console.log(typeof this.#PIN);
    } else {
        console.log(typeof this.#PIN);
        console.log("Access denied");
    }
}


makeCall(){
    console.log("calling");
}

}

const myMobile = new Mobile("1234");
myMobile.makeCall();
myMobile.openApp();