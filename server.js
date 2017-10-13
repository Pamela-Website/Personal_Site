const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const api_key = require('./public/oauth').api_key;
const domain = require('./public/oauth').domain;
const user = require('./public/oauth').user;
const mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });
// const xoauth2 = require('xoauth2');

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

app.post('/send', (req, res, next) => {
  let { name, email, message, hear } = req.body;
  let data = {
    from: email,
    to: user,
    subject: name,
    text: `
    Hi Pamela,
      I heard about your from: ${hear}.

      ${message}`,
  };
  let toClient = {
    from: user,
    to: email,
    subject: 'Email received',
    text: `
    Hello ${name},

    Thanks for connecting with me. I'll be in touch shortly (usually within 48 hours) in response to your inquiry.
    I look forward to helping you in any way you need.

    Best wishes,
    Pamela Sandler

    In Health | In Happiness | In Nourishment
    `,
  }
  mailgun.messages().send(data, (err, body) => {
    if (err) {
      console.error('there was an error: ', err);
      res.status(404);
      res.send(err);
    } else {
      console.log('here is the data in mailgun: ', body);
      res.send(body);
    }
  });
  mailgun.messages().send(toClient, (err, body) => {
    if (err) {
      console.error('there was an error: ', err);
      res.status(404);
      res.send(err);
    } else {
      console.log('here is the data in sent to the client: ', body);
      res.send(body);
    }
  })
})

app.listen(process.env.PORT || port, function() {
  console.log('we are in the mainframe: ', port);
})
