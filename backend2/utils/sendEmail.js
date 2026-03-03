const nodemailer = require("nodemailer");

const sendEmail = async (subject, htmlContent) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_SMTP_HOST,
      port: Number(process.env.BREVO_SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Naresh Book Depot" <${process.env.SENDER_EMAIL}>`, // ✅ FIXED
      to: process.env.OWNER_EMAIL,
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email error:", error.message);
    throw error;
  }
};

module.exports = sendEmail;