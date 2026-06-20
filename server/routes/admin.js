const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const requireAdmin = require('../middleware/requireAdmin');
const { getUsers, getUserDetail, skipUserToTask } = require('../controllers/adminController');

// All admin routes require auth first, then admin role
// GET /api/admin/users — list all students
router.get('/users', auth, requireAdmin, getUsers);

// GET /api/admin/users/:userId — one user's full roadmap
router.get('/users/:userId', auth, requireAdmin, getUserDetail);

// POST /api/admin/users/:userId/skip — skip user to task
router.post('/users/:userId/skip', auth, requireAdmin, skipUserToTask);

module.exports = router;
