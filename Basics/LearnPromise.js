const data = {
    title : "Title One ",
    desc : "Desc about callbacks"
}

let notifySubs = (videoData) => {
    console.log("Notification sent ++ "+ videoData.title);
}


//Promise is used For then n catch block and Async n Await

function uploadedVideo(){
    return new Promise((resolve, reject) => {       //Promise is a constructor with 2 callbacks Resolve - P n Reject - N
        
        setTimeout(() => {                          //Calling setTimeout to implement Async / Await
           console.log("In Upload");
            const isUploaded = true
            if(isUploaded){
                resolve("Upload Done")              //Resolve keyword positive scenario
            }
            else{
                reject("Failed")
            }

        }, 3000)

    })
}

function publishVideo(){
    return new Promise((resolve, reject) => {       //Promise is a constructor with 2 callbacks Resolve - P n Reject - N
        
        setTimeout(() => {                          //Calling setTimeout to implement Async / Await
            console.log("In Publish");

            const isPublished = false
            if(isPublished){
                resolve("Publish Done")
            }
            else{
                reject("Failed")
            }

        }, 3000)

    })
}

uploadedVideo()
.then((uploadedStatus)=>{
    console.log(uploadedStatus);
    return publishVideo();
} )
.then((publishStatus)=>{
    console.log(publishStatus);
    notifySubs(data)
})
.catch((error) => {
    console.log(error);
})