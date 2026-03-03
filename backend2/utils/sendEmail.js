const nodemailer = require("nodemailer");

const sendEmail = async (subject, htmlContent) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.OWNER_EMAIL,
    subject,
    html: htmlContent,
  });
};

module.exports = sendEmail;