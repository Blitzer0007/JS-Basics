// ErrorHandling.js
// Error handling examples for Playwright-style automation scripts.
// This file shows:
// - synchronous error handling with try/catch
// - throwing and validating errors
// - async error handling with async/await and promise rejection
// - using finally to clean up after success or failure

function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Failed to parse JSON:", error.message);
        throw new Error("Invalid JSON format");
    }
}

function validateAge(age) {
    if (typeof age !== "number") {
        throw new TypeError("Age must be a number");
    }
    if (age < 0) {
        throw new RangeError("Age cannot be negative");
    }
    return age;
}

try {
    const data = parseJson('{"name":"Haris","age":30}');
    console.log("Parsed data:", data);
    console.log("Validated age:", validateAge(data.age));
} catch (error) {
    console.error("Synchronous error caught:", error.message);
}

function fetchUser(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("fetchUser failed"));
            } else {
                resolve({ id: 1, name: "Haris" });
            }
        }, 1000);
    });
}

async function runFetch() {
    try {
        const user = await fetchUser(false);
        console.log("Fetched user:", user);

        await fetchUser(true);
    } catch (error) {
        console.error("Async error caught:", error.message);
    } finally {
        console.log("Fetch flow finished");
    }
}

runFetch();
