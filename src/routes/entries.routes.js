//Extrae solo la propiedad Router del modulo express
const { Router } = require('express');
const router = Router();

const { renderIndex, createNewEntry, renderNewEntry } = require('../controllers/entries.controller');

router.get('/', renderIndex);

router.get('/new-entry', renderNewEntry);

router.post('/new-entry', createNewEntry);



module.exports = router;