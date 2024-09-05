const express = require('express');
const router = express.Router();
const { getInventory, getAll, showCategories, showFromCategories, addToInventory, removePart } = require('../controllers/inventoryController');

router.get('/', getInventory );

router.get('/all', getAll);

router.get('/categories', showCategories)

router.get('/parts', showFromCategories)

router.get('/new', (req, res) => {
    try {
        res.render('newPart');
    } catch (error) {
        console.error('Error rendering New Part form:', error);
        res.status(500).send('Internal Server Error');
    }
})

router.post('/new', addToInventory);

router.post('/parts/delete', removePart)

module.exports = router;