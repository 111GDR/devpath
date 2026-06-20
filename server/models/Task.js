const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  index: {
    type: Number,
    required: true,
    unique: true
  },
  phase: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  week: {
    type: Number,
    required: true,
    min: 1,
    max: 42
  },
  day: {
    type: Number,
    required: true,
    min: 1
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  estimatedTime: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  concepts: {
    type: [String],
    default: []
  },
  videos: [{
    title: String,
    url: String
  }],
  docs: [{
    title: String,
    url: String
  }],
  deliverable: {
    type: String,
    required: true
  }
});

// Index on phase/week/day for fast queries
taskSchema.index({ phase: 1, week: 1, day: 1 });

module.exports = mongoose.model('Task', taskSchema);
