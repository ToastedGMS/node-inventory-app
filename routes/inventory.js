const express = require('express');
const router = express.Router();
const { getInventory, getAll, showCategories, showFromCategories } = require('../controllers/inventoryController');

router.get('/', getInventory );

router.get('/all', getAll);

router.get('/categories', showCategories)

router.get('/parts', showFromCategories)

module.exports = router;