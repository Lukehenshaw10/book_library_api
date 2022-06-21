const express = require('express');
const readersController = require('../controllers/reader');

const router = express.Router();

router.post('/', readersController.create);

router.get('/', readersController.read);

router.get('/:id', readersController.readById);

module.exports = router;