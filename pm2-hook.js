const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.PM2_AUTH_USER,
    pass: process.env.PM2_AUTH_PASS,
  },
});

// 发送邮件函数
function sendEmail(subject, text) {
  const mailOptions = {
    from: process.env.PM2_AUTH_USER,
    to: process.env.PM2_MAIL_TO,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

// 监听 PM2 事件
process.on('message', (packet) => {
  console.log('message packet: ', packet)
  if (packet.type === 'process:event') {
    const event = packet.data.event;
    const app = packet.data.process.name;

    if (event === 'exit') {
      sendEmail(`PM2 Alert: ${app} Shutdown`, `Application ${app} has shutdown.`);
    }

    if (event === 'error') {
      sendEmail(`PM2 Alert: ${app} Error`, `Application ${app} encountered an error.`);
    }
  }
});
