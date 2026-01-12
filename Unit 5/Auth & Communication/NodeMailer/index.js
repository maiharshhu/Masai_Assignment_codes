require('dotenv').config(); // Load environment variables
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.get('/sendemail', (req, res) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: [process.env.EMAIL_USER, 'venugopal.burli@masaischool.com'],
        subject: 'NEM Student Test Mail',
        text: 'This is a testing Mail sent by NEM student, no need to reply.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: error.message });
        }
        res.status(200).json({ success: true, message: 'Email sent: ' + info.response });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});