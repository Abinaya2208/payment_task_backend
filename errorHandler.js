const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error details (in development)
  
    res.status(err.status || 500).json({
      success: false,
      message: err.message || 'Internal Server Error',
    });
  };
  
  module.exports = errorHandler;