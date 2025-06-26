const ChatService = require('../services/chatService');

// @desc    Send message to chatbot
// @route   POST /api/chat/message
// @access  Private
exports.sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({
        success: false,
        message: 'Message is required'
      });
    }

    const response = await ChatService.generateResponse(message);
    
    res.json({
      success: true,
      data: response
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
}; 