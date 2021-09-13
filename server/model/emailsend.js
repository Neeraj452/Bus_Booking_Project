var nodemailer = require('nodemailer');
const Emailsend =(email,name)=>{
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



const SendEmailResevation =(bus_no,email,Initial_place,Destination,Date,time,Amount,Seat_NO)=>{
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
  subject: 'GreenBus ticket Reservation  Successful',
  
  html: `<h1>Welcome To Greenbus</h1><p>Bus No.</p>
  <p>Bus No.:${bus_no}</p>
  <p>Initial_place.:${Initial_place}</p>
  <p>Destination:${Destination}</p>
  <p>Date:${Date}</p>
  <p>time:${time}</p>
  <p>Amount:${Amount}</p>
  <p>Seat_NO:${Seat_NO}</p>`

};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}


module.exports = {Emailsend,SendEmailResevation};