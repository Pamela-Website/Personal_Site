const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const oauth = require('./public/oauth');
const xoauth2 = require('xoauth2');

const app = express();
let port = process.env.PORT || 3000

// Setup View Engine
app.set('views', path.join(__dirname +  '/views'));
app.set('view engine', 'ejs'); //specifies which view engine we want to use

// Allows us to render html files
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(__dirname));

// Set our bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
  });

app.post('/send', function(req, res, next) {
  let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          type: 'OAuth2',
          clientId: oauth.clientId,
          clientSecret: oauth.secret
      }
  });
  transporter.on('token', (token) => {
      console.log('A new access token was generated');
      console.log('User: %s', token.user);
      console.log('Access Token: %s', token.accessToken);
      console.log('Expires: %s', new Date(token.expires));
  });
  const mailOptions = {
    from: `${req.body.email}`,
    to: oauth.user,
    subject: `${req.body.name}`,
    text: `${req.body.message}`,
    replyTo: `${req.body.email}`,
    auth : {
          user: oauth.user,
          refreshToken: oauth.token,
          accessToken : oauth.access,
          expires: 1494388182480
      }
  };
  const firstName = req.body.name.split(' ')[0]
  const confirmationEmail = {
    from: oauth.user,
    to: `${req.body.email}`,
    subject: 'Confirmation Email from Ariel',
    text: `
    Hello ${firstName},

    Thank you for reaching out!

    If you have any further questions please let me know. I will get back to you shortly.

    Best wishes,

    Ariel Salem`
  }
  transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.error('there was an error: ', err);
      // res.status(500);
    } else {
      console.log('here is the res in mailOptions: ', res);
      // res.send(200);
    }
  })
  transporter.sendMail(confirmationEmail, function(err, res) {
    if (err) {
      console.error('there was an error: ', err);
      // res.status(500);
    } else {
      console.log('here is the res in confirmationEmail: ', res);
      // res.send(200);
    }
  })
})

app.listen(process.env.PORT || port, function() {
  console.log('we are in the mainframe: ', port);
})
