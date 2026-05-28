// moduleExport.js
// Module export example for Node.js / CommonJS.
// This file shows how to export data and functions from a module
// so other files can import them with require().

const user = {
    id: 1,
    name: "Haris",
    role: "automation tester"
};

function greetUser(user) {
    return `Hello, ${user.name}! Your role is ${user.role}.`;
}

function createUser(id, name, role) {
    return { id, name, role };
}

module.exports = {
    user,
    greetUser,
    createUser
};
