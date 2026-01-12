// 1. User Signup
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    if (users.find(u => u.email === email)) return res.status(400).send("User already exists.");

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ name, email, password: hashedPassword });
    res.status(201).send("User registered successfully.");
});

// 2. User Login
app.post('/login', authLimiter, async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ message: "Login successful", token });
    }
    res.status(401).send("Invalid credentials.");
});