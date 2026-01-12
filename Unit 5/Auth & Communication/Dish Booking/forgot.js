app.post('/forgot-password', authLimiter, (req, res) => {
    const { email } = req.body;
    const user = users.find(u => u.email === email);

    // Generic response for security
    if (!user) return res.status(200).send("If the email exists, a reset link has been sent.");

    const resetToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset',
        text: `Click here to reset: ${resetLink}`
    });

    res.status(200).send("Reset link sent.");
});