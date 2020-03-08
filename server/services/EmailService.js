const nodemailer = require('nodemailer');
const ServiceResponse = require("../BaseClasses/ServiceResponse").serviceResponse;
const appConstants = require("../utils/constants").appConstants;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'suruchicool555@gmail.com',
    pass: '9810843191'
  }
});

const mailOptions = {
  from: "suruchicool555@gmail.com",
  to: 'myfriend@yahoo.com',
  subject: 'SmartCricket Otp',
  text: 'That was easy!'
};


const sendMail = async (to,mailContent,format = "text") => {
  mailOptions[format] = mailContent;
  mailOptions.to = to;
  let result = await mailerPromise();
  console.log("EEE",result)
  return result;
}

const mailerPromise = () => {
  return new Promise((resolve,reject) => {
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        let sr = new ServiceResponse(false,appConstants.SMS_SERVICE_NOT_AVAILABLE);
        resolve(sr.getServiceResponse());  
      } else {
        console.log('Email sent: ' + info.response);
        let sr = new ServiceResponse(true,appConstants.SMS_SENT);
        resolve(sr.getServiceResponse()); 
      }
    });
  })
}

module.exports = {
    sendMail:sendMail
}