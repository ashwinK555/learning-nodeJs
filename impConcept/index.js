const fs = require("fs");

// blocking operation (synchronous opeation)
console.log(1);
let result = fs.readFileSync("./data.txt","utf-8");
console.log(result);
console.log(2);

// non blocking operation (asynchronous operation)
console.log(3);
fs.readFile("./data.txt","utf-8",(err,result)=>{
    console.log(result);
});
console.log(4);