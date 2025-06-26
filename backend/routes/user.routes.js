const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/user.controller');
const { protect } = require('../middleware/auth.middleware');

// Protected route
router.get('/profile', protect, getProfile);

module.exports = router; 