const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "stefangalaxy13@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendGoodByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "stefangalaxy13@gmail.com",
        subject: "Hope we'll meet again!",
        text: `We're sad you're leaving, ${name}. Let us know what we could've done to keep you onboard!`
    })
}

module.exports = {
  sendWelcomeEmail,
  sendGoodByeEmail
};
