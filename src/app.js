const express = require('express');

const database=require("./config/database")

const User = require("./model/user")

const app = express();

app.use(express.json())


app.get("/feed",async(req,res)=>{

    try{
        const data = await User.find({});
        res.send(data);
    }
    catch(err){
        res.status(404).send("Something went wrong")
    }
})


app.get("/user",async(req,res) => {
 
    const userEmail = req.body.email;

    try{
        const data = await User.findOne({email:userEmail})
        res.send(data)
    }
    catch(err){
        res.status(404).send("Something went wrong")
    }

})



app.post("/signup",async(req,res)=>{

    const data = new User(req.body)

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

