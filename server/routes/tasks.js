const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getTodayTask, completeTask, getAllTasks } = require('../controllers/taskController');

// All task routes require authentication and student role
const requireStudent = (req, res, next) => {
  if (req.user.role !== 'student') {
    return res.status(403).json({ error: 'Access denied. Student account required.' });
  }
  next();
};

// GET /api/tasks/today — returns current task
router.get('/today', auth, requireStudent, getTodayTask);

// POST /api/tasks/complete — mark today's task done
router.post('/complete', auth, requireStudent, completeTask);

// GET /api/tasks/all — full roadmap with status
router.get('/all', auth, requireStudent, getAllTasks);

module.exports = router;
