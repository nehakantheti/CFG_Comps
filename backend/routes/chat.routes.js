const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/chat.controller');
const { protect } = require('../middleware/auth.middleware');

// Protected chat route
router.post('/message', protect, sendMessage);

module.exports = router; 