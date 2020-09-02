const express = require('express');
const router = express.Router();

// Default Controller
router.get('/', (req, res) => {
    res.send('Hello World!');
});

// Home Controller
router.get('/home', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;