const express = require('express');

const keyRouter = express.Router();

// /api/keys/paypal
keyRouter.get('/paypal', (req, res) => {
  res.json({ clientId: process.env.PAYPAL_CLIENT_ID || 'sb' });
});

module.exports = keyRouter;
