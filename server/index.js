require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Route imports
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/tasks');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Security ────────────────────────────────────────────
app.use(helmet());

// Rate limiting: 100 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' }
});
app.use(limiter);

// ─── Middleware ───────────────────────────────────────────
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// ─── Request logging ─────────────────────────────────────
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

// ─── Routes ──────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/admin', adminRoutes);

// ─── Static Files for Production ─────────────────────────
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

// ─── 404 handler ─────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ─── Global error handler ────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// ─── Database connection & server start ──────────────────
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✓ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`✓ Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('✗ MongoDB connection error:', err.message);
    process.exit(1);
  });

module.exports = app;
