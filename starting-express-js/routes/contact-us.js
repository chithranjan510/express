const express = require('express');

const path = require('path');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
})

router.post('/success', (req, res, next) => {
  res.send(`<h2>Form Successfully filled</h2>`);
})

module.exports = router;