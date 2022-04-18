const fs = require("fs");

// Creating a new file //

// fs.writeFileSync("read1.txt", "Hello");
// fs.writeFileSync("read.txt", "How are you");
// file data add //
fs.appendFileSync("read.txt", "I am fine");
const data = fs.readFileSync("read.txt");
org_data = data.toString();
console.log(org_data);

// File rename //
// fs.renameSync('read.txt', 'readwrite.txt')

// Delete File //
// fs.unlinkSync("readwrite.txt")
