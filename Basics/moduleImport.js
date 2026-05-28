// moduleImport.js
// Module import example for Node.js / CommonJS.
// This file shows how to import exported values from another module
// using require(), which is useful when organizing Playwright tests.

const { user, greetUser, createUser } = require("./moduleExport");

console.log(user);
console.log(greetUser(user));

const newUser = createUser(2, "Anita", "tester");
console.log(newUser);

// If you later switch to ES modules with package.json { "type": "module" },
// you can replace this require usage with:
// import { user, greetUser, createUser } from "./moduleExport.js";
