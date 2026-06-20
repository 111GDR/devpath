const User = require('../models/User');
const Task = require('../models/Task');
const UserTask = require('../models/UserTask');

/**
 * GET /api/admin/users
 * List all students with name, email, currentTaskIndex, streak
 */
const getUsers = async (req, res) => {
  try {
    const students = await User.find({ role: 'student' })
      .select('name email currentTaskIndex streak')
      .sort({ createdAt: -1 })
      .lean();

    const totalTasks = await Task.countDocuments();

    // Enrich with phase/week info
    const enrichedStudents = await Promise.all(
      students.map(async (student) => {
        const currentTask = await Task.findOne({ index: student.currentTaskIndex }).lean();
        return {
          ...student,
          currentPhase: currentTask?.phase || null,
          currentWeek: currentTask?.week || null,
          currentTaskTitle: currentTask?.title || 'All completed',
          totalTasks,
          percentage: Math.round((student.currentTaskIndex / totalTasks) * 100)
        };
      })
    );

    res.json({ users: enrichedStudents });
  } catch (err) {
    console.error('Admin get users error:', err.message);
    res.status(500).json({ error: 'Failed to get users.' });
  }
};

/**
 * GET /api/admin/users/:userId
 * One user's full roadmap showing each task as locked/completed/current
 */
const getUserDetail = async (req, res) => {
  try {
    const { userId } = req.params;

    const student = await User.findById(userId).select('-password').lean();
    if (!student) {
      return res.status(404).json({ error: 'User not found.' });
    }

    if (student.role !== 'student') {
      return res.status(400).json({ error: 'User is not a student.' });
    }

    // Get all tasks
    const tasks = await Task.find().sort({ index: 1 }).lean();

    // Get completed tasks for this user
    const completedTasks = await UserTask.find({ userId }).lean();
    const completedIndexes = new Set(completedTasks.map(ct => ct.taskIndex));

    // Add status to each task
    const tasksWithStatus = tasks.map(task => ({
      ...task,
      status: completedIndexes.has(task.index) 
        ? 'completed' 
        : task.index === student.currentTaskIndex 
          ? 'current' 
          : 'locked'
    }));

    res.json({
      user: {
        id: student._id,
        name: student.name,
        email: student.email,
        currentTaskIndex: student.currentTaskIndex,
        streak: student.streak,
        createdAt: student.createdAt
      },
      tasks: tasksWithStatus,
      totalTasks: tasks.length
    });
  } catch (err) {
    console.error('Admin get user detail error:', err.message);
    res.status(500).json({ error: 'Failed to get user details.' });
  }
};

/**
 * POST /api/admin/users/:userId/skip
 * Sets user's currentTaskIndex to targetTaskIndex
 * Validates: must be a number, within range, greater than current index
 */
const skipUserToTask = async (req, res) => {
  try {
    const { userId } = req.params;
    const { targetTaskIndex } = req.body;

    // Validate targetTaskIndex
    if (targetTaskIndex === undefined || targetTaskIndex === null) {
      return res.status(400).json({ error: 'targetTaskIndex is required.' });
    }

    if (typeof targetTaskIndex !== 'number' || !Number.isInteger(targetTaskIndex)) {
      return res.status(400).json({ error: 'targetTaskIndex must be an integer.' });
    }

    const totalTasks = await Task.countDocuments();
    if (targetTaskIndex < 0 || targetTaskIndex >= totalTasks) {
      return res.status(400).json({ 
        error: `targetTaskIndex must be between 0 and ${totalTasks - 1}.` 
      });
    }

    const student = await User.findById(userId);
    if (!student) {
      return res.status(404).json({ error: 'User not found.' });
    }

    if (student.role !== 'student') {
      return res.status(400).json({ error: 'User is not a student.' });
    }

    if (targetTaskIndex <= student.currentTaskIndex) {
      return res.status(400).json({ 
        error: 'Cannot skip backward. targetTaskIndex must be greater than current index.' 
      });
    }

    // Update the user's currentTaskIndex
    student.currentTaskIndex = targetTaskIndex;
    await student.save();

    const targetTask = await Task.findOne({ index: targetTaskIndex }).lean();

    res.json({
      message: `User skipped to task ${targetTaskIndex}: ${targetTask?.title || 'Unknown'}`,
      currentTaskIndex: targetTaskIndex
    });
  } catch (err) {
    console.error('Admin skip user error:', err.message);
    res.status(500).json({ error: 'Failed to skip user.' });
  }
};

module.exports = { getUsers, getUserDetail, skipUserToTask };
