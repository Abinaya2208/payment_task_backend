

const sessionService = require('../services/sessionService');

const createSession = async (req, res, next) => {
  try {
    const sessionData = await sessionService.createSession();
    if(sessionData.error){
      res.status( 500).json({
        success: false,
        message: sessionData.message || 'Internal Server Error',
      });
      return;
    }
    res.status(201).json({ success: true, data: sessionData });
  } catch (error) {
    next(error); 
  }
};

module.exports = {
  createSession
};