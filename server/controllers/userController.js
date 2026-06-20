const Task = require('../models/Task');
const User = require('../models/User');
const UserTask = require('../models/UserTask');

/**
 * GET /api/user/progress
 * Returns currentTaskIndex, totalTasks, percentage
 */
const getProgress = async (req, res) => {
  try {
    const totalTasks = await Task.countDocuments();
    const currentTaskIndex = req.user.currentTaskIndex;
    const percentage = totalTasks > 0 
      ? Math.round((currentTaskIndex / totalTasks) * 100) 
      : 0;

    res.json({
      currentTaskIndex,
      totalTasks,
      percentage
    });
  } catch (err) {
    console.error('Get progress error:', err.message);
    res.status(500).json({ error: 'Failed to get progress.' });
  }
};

/**
 * GET /api/user/streak
 * Returns streak count and lastLoginDate
 */
const getStreak = async (req, res) => {
  try {
    res.json({
      streak: req.user.streak,
      lastLoginDate: req.user.lastLoginDate
    });
  } catch (err) {
    console.error('Get streak error:', err.message);
    res.status(500).json({ error: 'Failed to get streak.' });
  }
};

/**
 * GET /api/user/calendar
 * Returns array of dates when the user completed a task (last 365 days)
 */
const getCalendar = async (req, res) => {
  try {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    // Fetch task completions for the current user in the last year
    const completions = await UserTask.find({
      userId: req.user._id,
      completedAt: { $gte: oneYearAgo }
    }).select('completedAt');

    const recentDates = completions.map(c => c.completedAt);

    res.json({ loginDates: recentDates });
  } catch (err) {
    console.error('Get calendar error:', err.message);
    res.status(500).json({ error: 'Failed to get calendar data.' });
  }
};

module.exports = { getProgress, getStreak, getCalendar };
