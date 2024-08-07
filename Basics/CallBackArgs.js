//CallBack
let uploadVideo = (videoData, uploadVideoCallBack) => {                            //Passing params as callback
    console.log("Uploading video");
    setTimeout(() => {
        console.log("Uploading done ++ " + videoData.title);
        uploadVideoCallBack(videoData);                                          //Calling the method
    }, 3000);
}

let publishingVideo = (videoData, publishVideoCallBack) => {
    console.log("Publishing video");
    setTimeout(() => {
        console.log("Published ++ "+ videoData.title);
        publishVideoCallBack(videoData);
    }, 3000);
}

let notifySubs = (videoData) => {
    console.log("Notification sent ++ "+ videoData.title);
}

// uploadVideo()
// publishingVideo()                       //Here it is async so it wont wait for the timeouts like random first executions
// notifySubs()

const data = {
    title : "Title One ",
    desc : "Desc about callbacks"
}


 //Callback method is used to sync the process

uploadVideo(data, (uploadedData) =>{                        //For uploadVideo, "publishingVideo" is the callBack and reference is the params
                                          // by calling uploadVideoCallBack();

    publishingVideo(uploadedData, (publishedData) => {               //For publishingVideo, "notifySubs" is the callBack and reference is the params
                                          // by calling publishVideoCallBack();

        notifySubs(publishedData)                      //Returns the value

    })
})