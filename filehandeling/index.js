const fs = require("fs");

// // synschronous method
 fs.writeFileSync("./syncFile.txt"," file content here...");

// // Async method
 fs.writeFile("./asyncFile.txt", "file content here...", (err)=>{
     console.log(err);
});

// // appending data in file
fs.appendFileSync("./syncFile.txt","ashwin 98000000");

// // reading the file content

// // sync method -- it always return data in a variable
  let data= fs.readFileSync("./syncFile.txt" ,"utf-8");
  console.log(data);

// // async method-- it will not return data in variable, but it takes a call back functio which return the err and data, we should handle it
 fs.readFile("./asyncFile.txt","utf-8",(err, data)=>{
    if(err){
        console.log(err);
    }else{  
        console.log(data);
}
    
});

// // copying file 
fs.cpSync("./syncFile.txt","./copiedFile.txt");

// // now deleting copiedFile.txt
fs.unlinkSync("./copiedFile.txt");
