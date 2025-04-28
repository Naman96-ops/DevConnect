const express = require('express');

const app = express();

app.use("/user",(req,res)=>{
    res.send("HAHAHAHA")
})


app.get("/user",(req,res)=>{
    res.send({firstname:"Naman",lastname:"Joshi"})
})

app.post("/user",(req,res)=>{
    res.send("Data successfullysaved to database")
})
app.delete("/user",(req,res)=>{
    res.send("Deleted Successfully")
})


app.use("/test",(req,res)=>{
    res.send("Hello from /test")
})



app.listen(7777,()=>{
    console.log("Server is succcessfully created")
})