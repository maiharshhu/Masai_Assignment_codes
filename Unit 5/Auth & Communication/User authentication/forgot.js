// 3. Forgot Password
app.post('/forgot-password', authLimiter, (req, res) => {
    const { email } = req.body;
    const user = users.find(u => u.email === email);

    // Security: Do not disclose if email exists
    if (!user) return res.status(200).send("If that email exists, a reset link has been sent.");

    const resetToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

    // Reusing the transporter from our previous steps
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset Request',
        text: `Click here to reset your password: ${resetLink}. This link expires in 15 minutes.`
    });

    res.status(200).send("If that email exists, a reset link has been sent.");
});

// 4. Reset Password
app.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = users.find(u => u.email === decoded.email);
        
        if (!user) return res.status(404).send("User not found.");

        user.password = await bcrypt.hash(newPassword, 10);
        res.send("Password has been updated successfully.");
    } catch (err) {
        res.status(400).send("Invalid or expired token.");
    }
});

app.listen(process.env.PORT, () => console.log(`Auth Server running on port ${process.env.PORT}`));