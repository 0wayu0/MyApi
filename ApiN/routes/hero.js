const express = require('express');
const { getAllHero, getAllskills, getAllUltimates, getHeroByID, insertHero, deleteHero, updateHero } = require('../controller/heroController');
const router = express.Router();

/* GET users listing. */
router.get('/', getAllHero);
router.get('/:id', getHeroByID);
router.get('/skills', getAllskills);
router.get('/ultimates', getAllUltimates);

router.get('/ultimates', getAllUltimates);

router.post('/', insertHero);
router.delete('/delete/:id', deleteHero);
router.put('/:id', updateHero);
module.exports = router;
