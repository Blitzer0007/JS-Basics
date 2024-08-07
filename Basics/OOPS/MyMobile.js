const mobile = require("./Mobile.js")

const myMobile = new mobile.MOB();
myMobile.makeCall()                 //It will throw ReferenceError: Mobile is not defined, So need to use exports keyword

