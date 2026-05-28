// Async/Await and advanced async control example
// This file demonstrates:
// - sequential async flow with async/await
// - error handling via try/catch/finally
// - parallel execution with Promise.all
// - race conditions with Promise.race
// - result tracking with Promise.allSettled

const videoData = {
    title: "Title One",
    desc: "Demonstrate async/await"
};

function uploadVideo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Uploading video...");
            const isUploaded = true;
            if (isUploaded) {
                resolve("Upload completed");
            } else {
                reject("Upload failed");
            }
        }, 2000);
    });
}

function publishVideo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Publishing video...");
            const isPublished = true;
            if (isPublished) {
                resolve("Publish completed");
            } else {
                reject("Publish failed");
            }
        }, 2000);
    });
}

function notifySubs() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Notification sent: " + videoData.title);
            resolve("Notification completed");
        }, 1000);
    });
}

async function processVideo() {
    try {
        const uploadStatus = await uploadVideo();
        console.log(uploadStatus);

        const publishStatus = await publishVideo();
        console.log(publishStatus);

        const notifyStatus = await notifySubs();
        console.log(notifyStatus);

        console.log("Video flow finished successfully");
    } catch (error) {
        console.error("Async flow error:", error);
    } finally {
        console.log("Async flow ended");
    }
}

async function runParallelTasks() {
    const taskOne = new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000));
    const taskTwo = new Promise((resolve) => setTimeout(() => resolve("Task 2 done"), 1500));

    const results = await Promise.all([taskOne, taskTwo]);
    console.log("Parallel results:", results);
}

async function runRaceTasks() {
    const taskOne = new Promise((resolve) => setTimeout(() => resolve("Race: Task 1 finished first"), 1200));
    const taskTwo = new Promise((resolve) => setTimeout(() => resolve("Race: Task 2 finished first"), 800));

    const winner = await Promise.race([taskOne, taskTwo]);
    console.log(winner);
}

async function runSettledTasks() {
    const taskOne = Promise.resolve("AllSettled: success task");
    const taskTwo = Promise.reject("AllSettled: failed task");

    const results = await Promise.allSettled([taskOne, taskTwo]);
    console.log("AllSettled results:", results);
}

processVideo();
runParallelTasks();
runRaceTasks();
runSettledTasks();
