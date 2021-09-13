var nodemailer = require('nodemailer');
const SendEmail =(email,name)=>{
  console.log("check mail");
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'neerajmaurya75725611@gmail.com',
    pass: 'Neeraj@75725611'
  }
});

var mailOptions = {
  from: 'neerajmaurya75725611@gmail.com',
  to: email,
  subject: 'GreenBus Rasistration Successful',
  text: `Hi ${name}, Wellcome To GrrenBus.
          Hi ${name} here you can book the bus ticket .`
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

module.exports = {Emailsend};