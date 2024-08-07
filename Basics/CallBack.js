//CallBack
let uploadVideo = (uploadVideoCallBack) => {                            //Passing params as callback
    console.log("Uploading video");
    setTimeout(() => {
        console.log("Uploading done");
        uploadVideoCallBack();                                          //Calling the method
    }, 3000)
}

let publishingVideo = (publishVideoCallBack) => {
    console.log("Publishing video");
    setTimeout(() => {
        console.log("Published");
        publishVideoCallBack();
    }, 3000);
}

let notifySubs = () => {
    console.log("Notification sent");
}

// uploadVideo()
// publishingVideo()                       //Here it is async so it wont wait for the timeouts like random first executions
// notifySubs()

 //Callback method is used to sync the process

uploadVideo(() =>{                        //For uploadVideo, "publishingVideo" is the callBack and reference is the params
                                          // by calling uploadVideoCallBack();

    publishingVideo(() => {               //For publishingVideo, "notifySubs" is the callBack and reference is the params
                                          // by calling publishVideoCallBack();

        notifySubs()                      //Returns the value

    })
})