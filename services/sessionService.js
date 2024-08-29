// services/sessionService.js

const axios = require('axios');
require('dotenv').config();

const createSession = async () => {
  const data = {
    ttl: 86400,
    statements: [
      {
        permissions: ["group#all"],
        constraints: {
          platform: {
            platform_id: process.env.RAIN_FOREST_PAY_PLATFORM_KEY
          }
        }
      }
    ]
  };

  const options = {
    method: 'POST',
    url: `${process.env.RAIN_FOREST_PAY_BASE_URL}/sessions`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.RAIN_FOREST_PAY_API_KEY}`
    },
    data: data
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return {error:true , message:error.response ? error.response.data : error.message}
  }
};

module.exports = {
  createSession
};
