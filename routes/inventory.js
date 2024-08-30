const express = require('express');
const router = express.Router();
const { getInventory, getAll } = require('../controllers/inventoryController');

router.get('/', getInventory );

router.get('/all', getAll);

module.exports = router;