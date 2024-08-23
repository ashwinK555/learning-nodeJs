const http = require("http");
const fs = require("fs");

//creating server
// const myServer = http.createServer((req,res)=>{
// console.log("request recieved");
// res.end("hello this is server responding");
// });
// myServer.listen(8000,()=>{
//     console.log("server started");
// })

// cmd to stop the server ==> ctrl + c

//creating server and saving the requested data in log file
const myServer = http.createServer((req,res)=>{
    let log = `${Date.now()}: new request recieved `;
    fs.appendFile("./log.txt",log,(err, data)=>{
});
res.end("hello from server");
});
myServer.listen(8001,()=>{
    console.log("server started");
});