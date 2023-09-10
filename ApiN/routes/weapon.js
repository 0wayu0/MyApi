const express = require('express');
const { getAllWeapon, getWeaponByID } = require('../controller/weaponController');
const router = express.Router();

/* GET users listing. */
router.get('/', getAllWeapon);
router.get('/:id', getWeaponByID);

module.exports = router;
