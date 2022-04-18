const fs = require("fs");
const data = "";

var readerStream = fs.createReadStream("read.txt"); //Create a readable stream

readerStream.setEncoding("UTF8"); // Set the encoding to be utf8.

// Handle stream events --> data, end, and error
readerStream.on("data", function (chunk) {
  data += chunk;
});

readerStream.on("end", function () {
  console.log(data);
});
readerStream.on('error', function(error){
    console.log(err);
})

 // 2 Way //
// const rstream = fs.createReadStream('read.txt')
// const st = rstream.pipe()
// console.log(st);