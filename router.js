// routes/sessionRoutes.js

const express = require('express');
const router = express.Router();
const sessionController = require('./controllers/sessionController');
const merchantController = require('./controllers/merchantController')

// Define routes
router.post('/create-session', sessionController.createSession);
router.get('/merchants', merchantController.listMerchants);
router.post('/create-merchant', merchantController.createMerchant);

module.exports = router;