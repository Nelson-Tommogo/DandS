
const asyncHandler = require("express-async-handler");
const Africastalking = require("africastalking");

const africastalking = Africastalking({
    apiKey:process.env.API_KEY,
    username:'africasmsApp'
})

const sendSMS = asyncHandler(async(req,res)=>{
    const {phoneNumber} = req.body;
    
    if(!phoneNumber){
        return res.status(404).send("Phone Number is required");
    }
    try{
        

        //send the message
        const result = await africastalking.SMS.send({
            to:phoneNumber,
            message:"Your payment via Aspira is currently under processing"
        });

        console.log(result);
        res.status(200).json({
            status: "success",
            data: {
                result
            }
        })
    }catch(error){
        console.log("Error",error);
        res.status(500).send("An error occured while send SMS")
    }
})

module.exports ={sendSMS}

/// Convert phoneNumber to string
// phoneNumber = phoneNumber.toString();

// // Check if phoneNumber starts with "07"
//      if (phoneNumber.startsWith("07")) {
//     // Remove "07" and replace with "+254"
//     phoneNumber = "+254" + phoneNumber.slice(2);
//     }