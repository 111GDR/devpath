const mongoose = require('mongoose');

const userTaskSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  taskId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: true
  },
  taskIndex: {
    type: Number,
    required: true
  },
  completedAt: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String,
    default: ''
  }
});

// Compound index: one completion record per user per task
userTaskSchema.index({ userId: 1, taskIndex: 1 }, { unique: true });

module.exports = mongoose.model('UserTask', userTaskSchema);
