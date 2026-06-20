const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * Auth middleware
 * Reads JWT from httpOnly cookie, verifies it, and attaches req.user
 * Returns 401 if token is missing, invalid, or user not found
 */
const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: 'Authentication required. Please log in.' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user and attach to request
    const user = await User.findById(decoded.userId).select('-password');
    if (!user) {
      return res.status(401).json({ error: 'User not found. Please log in again.' });
    }

    req.user = user;
    next();
  } catch (err) {
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token. Please log in again.' });
    }
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Session expired. Please log in again.' });
    }
    return res.status(500).json({ error: 'Authentication error.' });
  }
};

module.exports = auth;
