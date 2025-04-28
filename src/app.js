const express = require('express');

const database=require("./config/database")

const User = require("./model/user")

const app = express();

app.post("/signup",async(req,res)=>{

    

    const data = new User( {
        firstName:"Rohit",
        lastName:"Sharma",
        email:"Rohi@sharma.com",
        password:"rohit30",
       
    })

    try{

        await data.save();

    res.send("User addes Successfully")

    }
    catch(err){

        res.status(400).send("Error saving the user:"+ err.message)
    }

    

})

database()
.then(()=>{
   console.log("Database connected successfully")
   app.listen(7777,() => {
    console.log("server is successfully created")
})
})
.catch((err)=>{
    console.error("Database not connect successfully")
})

