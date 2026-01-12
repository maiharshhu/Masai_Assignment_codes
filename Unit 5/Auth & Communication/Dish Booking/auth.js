app.post('/signup', async (req, res) => {
    const { name, email, password, role } = req.body; // roles: Admin, User, Chef
    if (users.find(u => u.email === email)) return res.status(400).send("User exists.");

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ name, email, password: hashedPassword, role: role || 'User' });
    res.status(201).send("User registered.");
});

app.post('/login', authLimiter, async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }
    res.status(401).send("Invalid credentials.");
});