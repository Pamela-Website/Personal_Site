# Personal_Site
REN Framework for personal site

#ABOUT THE APP
This is a simple REN (React, Node / Express) Portfolio app that uses NodeMailer with oauth for the contact form. The app  also makes use of an additional api to fetch medium posts from my personal blog 'https://medium.com/feed/@ariel.salem1989' (feel free to use this template if you'd like).

#STARTING THE APP
Starting the app requires users run an npm install / yarn install.

It should be noted that if `nodemon` is not currently installed on your local device, you will need to run a `yarn add nodemon` or `npm install nodemon --save` in order to make use of the current `npm start` command (feel free to change the start command as you see fit).

Once you have a valid start command and have installed all your dependencies, you will need to run `npm run build:watch` to compile the app, this will allow for real-time builds whenever changes are made.

To start the server you can run `npm start`  and navigate to localhost:3000 to check it out.

#THINGS THAT WILL NEED CUSTOMIZING
Some things to keep in mind when working on this repo:
 - if you'd like to use nodemailer, make sure you set up the SERVER to take your information into consideration (currently, imported variables are being used).
  - this current repo also depends on images in ignored files (located in the CURRENTPROJECTS component).
