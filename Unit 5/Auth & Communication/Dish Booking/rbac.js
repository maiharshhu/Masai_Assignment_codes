const authorize = (roles = []) => {
    return (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).send("Unauthorized");

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).send("Forbidden");
            }
            req.user = decoded;
            next();
        } catch (err) {
            res.status(401).send("Invalid Token");
        }
    };
};

// Example Admin Route
app.post('/dishes', authorize(['Admin']), (req, res) => {
    dishes.push(req.body);
    res.status(201).send("Dish added.");
});

// Example User Route: Place Order
app.post('/orders', authorize(['User']), (req, res) => {
    const chefs = users.filter(u => u.role === 'Chef');
    const assignedChef = chefs[Math.floor(Math.random() * chefs.length)];

    const newOrder = {
        id: orders.length + 1,
        user: req.user.email,
        status: "Order Received",
        chef: assignedChef ? assignedChef.name : "Pending Assignment"
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});