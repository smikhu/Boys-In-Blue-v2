const express = require('express');

router = express.Router();

squadRoute = require('../controllers/Squad');

router.get('/', squadRoute.Squad)

module.exports = router;