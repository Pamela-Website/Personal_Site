const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const oauth = require('./public/oauth');

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
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: oauth.user,
      pass: oauth.pass
    }
  })
  const mailOptions = {
    from: `${req.body.email}`,
    to: oauth.user,
    subject: `${req.body.name}`,
    text: `${req.body.message}`,
    replyTo: `${req.body.email}`
  }
  transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.error('there was an error: ', err);
    } else {
      console.log('here is the res: ', res)
    // res.redirect('/')
    }
  })
})

app.listen(port, function() {
  console.log('we are in the mainframe: ', port);
})
