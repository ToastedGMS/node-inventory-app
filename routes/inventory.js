const express = require('express');
const router = express.Router();
const { getInventory, getAll, showCategories } = require('../controllers/inventoryController');

router.get('/', getInventory );

router.get('/all', getAll);

router.get('/categories', showCategories)

module.exports = router;