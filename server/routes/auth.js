const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { register, login, logout, getMe } = require('../controllers/authController');

// POST /api/auth/register — create student account
router.post('/register', register);

// POST /api/auth/login — login (student or admin)
router.post('/login', login);

// POST /api/auth/logout — clear cookie
router.post('/logout', logout);

// GET /api/auth/me — return current user (requires auth)
router.get('/me', auth, getMe);

module.exports = router;
