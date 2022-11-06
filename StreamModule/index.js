const http = require("http");
const fs = require("fs");


const server = http.createServer();

server.on("request",(req,res)=>
{
    // fs.readFile("input.txt",(err,data)=>{
    //     if(err)return console.error(err);
    //     res.end(data.toString()) ;
    // });
    // we need to cvreate readable stream
    // 2 nd way
    //const rstream= fs.createReadStream("input.txt");
    // rstream.on('data',(chankdata)=>{
    //     res.write(chankdata);
    // });
    // rstream.on('end',(data)=>{
    //     res.end(data);
    // });


    //3rd way
    const rstream= fs.createReadStream("input.txt");
    rstream.pipe(res);

});
server.listen(8000,"127.0.0.1");

