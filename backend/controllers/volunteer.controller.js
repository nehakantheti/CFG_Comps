const VolunteerData = require('../models/volunteer.model');

// Create new volunteer data
exports.createVolunteer = async (req, res) => {
  try {
    const { name, email, phone, city, contributions, availability, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !city || !contributions || contributions.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Create new volunteer data
    const volunteerData = new VolunteerData({
      name,
      email,
      phone,
      city,
      contributions,
      availability,
      message
    });

    // Save to database
    await volunteerData.save();

    res.status(201).json({
      success: true,
      message: 'Volunteer data submitted successfully',
      data: volunteerData
    });

  } catch (error) {
    // Handle mongoose validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: Object.values(error.errors).map(err => err.message).join(', ')
      });
    }

    // Handle other errors
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
}; 