const express = require('express');
const { getAllHero, getAllskills, getAllUltimates, getHeroByID } = require('../controller/heroController');
const router = express.Router();

/* GET users listing. */
router.get('/', getAllHero);
router.get('/:id', getHeroByID);
router.get('/skills', getAllskills);
router.get('/ultimates', getAllUltimates);

router.get('/ultimates', getAllUltimates);

module.exports = router;
