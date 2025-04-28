const express = require('express');

const {adminAuth,userAuth} =require("./middlewares/auth.js")


const app = express();

app.use("/admin",adminAuth)

app.get("/user",userAuth,(req,res)=> {

    res.send("welcome user")
})

app.get("/admin/getAllData",(req,res)=>{

    res.send("Sent All Data")  
 
})

app.get("/admin/deleteAllData",(req,res)=>{

    res.send("All data deleted")
    
 })

app.listen(7777,() => {
    console.log("server is successfully created")
})