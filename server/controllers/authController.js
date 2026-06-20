const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * Cookie options for JWT token
 */
const getCookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
});

/**
 * Generate JWT token
 */
const generateToken = (userId, role) => {
  return jwt.sign(
    { userId, role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

/**
 * Check if two dates are the same calendar day
 */
const isSameDay = (d1, d2) => {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
};

/**
 * Check if d1 is exactly one day before d2
 */
const isYesterday = (d1, d2) => {
  const yesterday = new Date(d2);
  yesterday.setDate(yesterday.getDate() - 1);
  return isSameDay(d1, yesterday);
};

/**
 * Update streak and login dates on login
 */
const updateLoginData = async (user) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Streak logic
  if (user.lastLoginDate) {
    const lastLogin = new Date(user.lastLoginDate);
    lastLogin.setHours(0, 0, 0, 0);

    if (isSameDay(lastLogin, today)) {
      // Same day — do nothing to streak
    } else if (isYesterday(lastLogin, today)) {
      // Yesterday — increment streak
      user.streak += 1;
    } else {
      // More than 1 day ago — reset streak
      user.streak = 1;
    }
  } else {
    // First login ever
    user.streak = 1;
  }

  // Update lastLoginDate
  user.lastLoginDate = today;

  // Push today to loginDates if not already present
  const alreadyLoggedToday = user.loginDates.some(date => 
    isSameDay(new Date(date), today)
  );
  if (!alreadyLoggedToday) {
    user.loginDates.push(today);
  }

  await user.save();
};

/**
 * POST /api/auth/register
 */
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters.' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({ error: 'An account with this email already exists.' });
    }

    // Create user (password hashed by pre-save hook)
    const user = new User({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password
    });

    await user.save();

    // Generate token and set cookie
    const token = generateToken(user._id, user.role);
    res.cookie('token', token, getCookieOptions());

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        currentTaskIndex: user.currentTaskIndex,
        streak: user.streak
      }
    });
  } catch (err) {
    console.error('Register error:', err.message);
    res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
};

/**
 * POST /api/auth/login
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    // Find user (include password for comparison)
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Update streak and login dates
    await updateLoginData(user);

    // Generate token and set cookie
    const token = generateToken(user._id, user.role);
    res.cookie('token', token, getCookieOptions());

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        currentTaskIndex: user.currentTaskIndex,
        streak: user.streak
      }
    });
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ error: 'Login failed. Please try again.' });
  }
};

/**
 * POST /api/auth/logout
 */
const logout = (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0)
  });
  res.json({ message: 'Logged out successfully.' });
};

/**
 * GET /api/auth/me
 */
const getMe = async (req, res) => {
  try {
    res.json({
      user: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
        currentTaskIndex: req.user.currentTaskIndex,
        streak: req.user.streak,
        createdAt: req.user.createdAt
      }
    });
  } catch (err) {
    console.error('Get me error:', err.message);
    res.status(500).json({ error: 'Failed to get user data.' });
  }
};

module.exports = { register, login, logout, getMe };
