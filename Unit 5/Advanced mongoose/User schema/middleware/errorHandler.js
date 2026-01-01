module.exports = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    if (err.name === 'ValidationError') statusCode = 400;
    if (err.code === 11000) {
        statusCode = 400;
        message = "Email already exists";
    }

    res.status(statusCode).json({ success: false, message });
};