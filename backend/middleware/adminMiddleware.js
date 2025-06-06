const asyncHandler = require('express-async-handler');

// Middleware to check if user is admin
const admin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
});

module.exports = { admin };
