const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello from server")
})

app.get("/hello",(req,res)=>{
    res.send("Hello from server hello")
})

app.get("/test",(req,res)=>{
    res.send("Hello from /test")
})

app.listen(7777,()=>{
    console.log("Server is succcessfully created")
})