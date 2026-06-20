const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getProgress, getStreak, getCalendar } = require('../controllers/userController');

// All user routes require authentication and student role
const requireStudent = (req, res, next) => {
  if (req.user.role !== 'student') {
    return res.status(403).json({ error: 'Access denied. Student account required.' });
  }
  next();
};

// GET /api/user/progress
router.get('/progress', auth, requireStudent, getProgress);

// GET /api/user/streak
router.get('/streak', auth, requireStudent, getStreak);

// GET /api/user/calendar
router.get('/calendar', auth, requireStudent, getCalendar);

module.exports = router;
