const Task = require('../models/Task');
const UserTask = require('../models/UserTask');
const User = require('../models/User');

/**
 * GET /api/tasks/today
 * Returns the current task, or { alreadyDone: true, nextTask } if completed
 */
const getTodayTask = async (req, res) => {
  try {
    const user = req.user;
    const totalTasks = await Task.countDocuments();

    // Check if user has completed all tasks
    if (user.currentTaskIndex >= totalTasks) {
      return res.json({
        completed: true,
        message: 'Congratulations! You have completed all tasks in the roadmap.'
      });
    }

    // Get current task
    const currentTask = await Task.findOne({ index: user.currentTaskIndex });
    if (!currentTask) {
      return res.status(404).json({ error: 'Current task not found.' });
    }

    // Check if today's task was already completed
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const completedToday = await UserTask.findOne({
      userId: user._id,
      taskIndex: user.currentTaskIndex - 1,
      completedAt: { $gte: today, $lt: tomorrow }
    });

    if (completedToday && user.currentTaskIndex > 0) {
      // Already completed today's task — show next task preview
      const nextTask = await Task.findOne({ index: user.currentTaskIndex });
      return res.json({
        alreadyDone: true,
        message: "You're done for today. Come back tomorrow.",
        nextTask: nextTask ? {
          title: nextTask.title,
          phase: nextTask.phase,
          week: nextTask.week,
          day: nextTask.day
        } : null
      });
    }

    res.json({ task: currentTask });
  } catch (err) {
    console.error('Get today task error:', err.message);
    res.status(500).json({ error: 'Failed to get today\'s task.' });
  }
};

/**
 * POST /api/tasks/complete
 * Mark today's task as done, increment currentTaskIndex
 */
const completeTask = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const totalTasks = await Task.countDocuments();

    // Check if all tasks are completed
    if (user.currentTaskIndex >= totalTasks) {
      return res.status(400).json({ error: 'All tasks already completed.' });
    }

    // Check if task was already completed today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const alreadyCompleted = await UserTask.findOne({
      userId: user._id,
      taskIndex: user.currentTaskIndex
    });

    if (alreadyCompleted) {
      return res.status(400).json({ error: 'This task has already been completed.' });
    }

    // Get the task
    const task = await Task.findOne({ index: user.currentTaskIndex });
    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    // Create UserTask completion record
    await UserTask.create({
      userId: user._id,
      taskId: task._id,
      taskIndex: user.currentTaskIndex,
      completedAt: new Date(),
      notes: req.body.notes || ''
    });

    // Increment currentTaskIndex
    user.currentTaskIndex += 1;
    await user.save();

    res.json({
      message: 'Task completed! Great work.',
      currentTaskIndex: user.currentTaskIndex,
      totalTasks,
      percentage: Math.round((user.currentTaskIndex / totalTasks) * 100)
    });
  } catch (err) {
    console.error('Complete task error:', err.message);
    res.status(500).json({ error: 'Failed to complete task.' });
  }
};

/**
 * GET /api/tasks/all
 * Full roadmap with status per task (locked/completed/current)
 */
const getAllTasks = async (req, res) => {
  try {
    const user = req.user;
    const tasks = await Task.find().sort({ index: 1 }).lean();

    // Get completed task indexes for this user
    const completedTasks = await UserTask.find({ userId: user._id }).lean();
    const completedIndexes = new Set(completedTasks.map(ct => ct.taskIndex));

    // Add status to each task
    const tasksWithStatus = tasks.map(task => ({
      ...task,
      status: completedIndexes.has(task.index) 
        ? 'completed' 
        : task.index === user.currentTaskIndex 
          ? 'current' 
          : 'locked'
    }));

    res.json({ tasks: tasksWithStatus });
  } catch (err) {
    console.error('Get all tasks error:', err.message);
    res.status(500).json({ error: 'Failed to get tasks.' });
  }
};

module.exports = { getTodayTask, completeTask, getAllTasks };
