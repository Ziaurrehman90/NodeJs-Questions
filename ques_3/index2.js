const fs=require("fs");
const readData = fs.readFileSync("nodejs_architecture.txt");

console.log(readData.toString());