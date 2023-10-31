const asyncHandler = require("express-async-handler");
const sendSMS = require("../helper/smshelper")

const getDetails =asyncHandler(async(req,res)=>{
    const {email,phoneNumber,productId,productName,nationalId} =req.body

    if (!phoneNumber) {
        return res.status(400).json({
            status: "error",
            message: "Phone Number is required"
        });
    }

    // Call the sendSMS function
    await sendSMS(req, res);

    res.status(200).json({
        status: "success",
        message: "Details entered successfully and payment processing message sent"
    });

})

module.exports ={getDetails}