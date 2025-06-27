const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteer.controller');

// POST /api/volunteer - Create new volunteer data
router.post('/', volunteerController.createVolunteer);

module.exports = router; 