var express = require('express')
var app = express()

app.get("/",(req,res)=>
{
 res.send("HEllo my self Computer xyz");    
});
app.get("/about",(req,res)=>
{
 res.send("are you in about page");    
});
    app.listen(8000,()=>{
    console.log("Welcome to post Number 8000");
    });

