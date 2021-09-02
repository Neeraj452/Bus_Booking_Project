var nodemailer = require('nodemailer');
const Emailsend =(email)=>{
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
  subject: 'Sending Email using Node.js',
  text: `Hi Smartherd, thank you for your nice Node.js tutorials.
          I will donate 50$ for this course. Please send me payment options.`
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