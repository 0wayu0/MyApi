const express = require('express');
const { getAllUser } = require('../controller/userController');
const router = express.Router();

/* GET users listing. */
router.get('/', getAllUser);

module.exports = router;
