const axios = require("axios");

const sendEmail = async (subject, htmlContent) => {
  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Naresh Book Depot",
          email: process.env.SENDER_EMAIL,
        },
        to: [
          {
            email: process.env.OWNER_EMAIL,
          },
        ],
        subject: subject,
        htmlContent: htmlContent,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
        timeout: 10000, // 🔥 IMPORTANT
      }
    );

    console.log("Email sent via API");
  } catch (error) {
    console.error("Email API error:", error.response?.data || error.message);
    throw error;
  }
};

module.exports = sendEmail;