 const express = require("express");
 const cors = require("cors");
 const africastalking = require("africastalking");
 require('dotenv').config()
 const smsRouter = require("./routes/smsRoute");
 const app = express();
 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({ extended:true}));

const PORT =7000;

app.get("/",async(req,res)=>{
    console.log("Welcome to the app")
})

app.use("/api/sms", smsRouter);

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})
