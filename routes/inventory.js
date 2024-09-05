const express = require('express');
const router = express.Router();
const { getInventory, getAll, showCategories, showFromCategories, addToInventory, removePart, updateItem, renderNew, getUpdate } = require('../controllers/inventoryController');

router.get('/', getInventory );

router.get('/all', getAll);

router.get('/categories', showCategories)

router.get('/parts', showFromCategories)

router.get('/new', renderNew)

router.post('/new', addToInventory);

router.post('/parts/delete', removePart)

router.get('/parts/edit/:id', getUpdate) 

router.post('/parts/update', updateItem);

module.exports = router;