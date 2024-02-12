const http=require("http");
const server=http.createServer((request,response)=>{
    if(request.url=='/'){
        response.write("<h1>I am happy to learn Full Stack development from PW Skills</h1>");
    }
    response.end();
})
server.listen(5001);
console.log("The http server is running on port 5001")
