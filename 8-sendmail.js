const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'Google App Password enter here',
  },
});

let mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@gmail.com',
  // to: 'myfriend@gmail.com, myotherfriend@gmail.com',//multiple friends
  subject: 'Sending Email using Node.js',
  text: 'Hello zee!',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
