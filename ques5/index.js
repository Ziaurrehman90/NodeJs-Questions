const fs=require("fs");
const data="NodeJs is a programming language that utilizes javasscript and its components";
fs.writeFileSync("nodejs_architecture.txt",data);
const data1="Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Nodejs can easily handle multiple clients rquests without requiring multiple threads , consuming less memory and resources . Additionally it is highly scalable and provides high performance . It is also flexible with multiple frameworks & makes the develpment processs easier."
fs.appendFileSync("nodejs_architecture.txt",data1); 
const readData=fs.readFileSync("nodejs_architecture.txt");
console.log(readData.toString())
fs.unlink("nodejs_architecture.txt",function(err){
    if(err){
        console.log("there is an error in deleting the file ",err);
    }
    console.log("file has successfully deleted:)")
})