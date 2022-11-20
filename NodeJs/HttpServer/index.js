const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>
{
    const data  = fs.readFileSync(`${__dirname}/userapi/userapi.json`,"utf-8");
    const objdata = JSON.parse(data);
    console.log(req.url);  
    
    if(req.url=="/")
    {
        res.end('Home page');//responce
    }
    else if(req.url=="/about")
    {
        res.end('About Page ');
    }
    else if(req.url=="/userapi")
    {
        res.end(objdata[0].title);
    }
     else
    {
        res.writeHead(404);
        res.end('<h1>404 Page Not Found</h1>');
    }
});
server.listen(8000,"127.0.0.1",()=> 
{
    console.log("Listening Porn Number 8000");
});