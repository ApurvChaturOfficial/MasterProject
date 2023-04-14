const nodemailer = require("nodemailer");


const sendEmail = async (option) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'paxton.bins64@ethereal.email',
        pass: 'BApPC5BKuHvcXN8XdQ'
    }
  });

  const mailOptions = {
    from: option.from,
    to: option.to,
    subject: option.subject,
    text: option.text
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;