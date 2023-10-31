const express = require("express");
// const { sendSMS } = require("../controllers/smsController");
const { getDetails } = require("../controllers/detailsController");
const router = express.Router();


router.post('/send-sms',getDetails);

module.exports =router;