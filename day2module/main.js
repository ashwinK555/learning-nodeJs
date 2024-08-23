function add(a ,b){
    return a+b;
} 

function sub(a,b){
    return a-b;
}
// to include these function in our index.js we have to export this module public 
module.exports= {add ,sub};
