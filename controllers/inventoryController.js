const { getAllParts, getCategories, getFromCategory, insertPart } = require('../database/queries');

function getInventory(req, res) {
    try {
        res.redirect('/inventory/all');
    } catch (error) {
        console.error('Error rendering inventory view:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function getAll(req,res){
    try{
        const items = await getAllParts();
        res.render('inventoryAll', {items});
    } catch (error){
        console.error('Error rendering inventory items:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function showCategories(req, res) {
    try {
        const categories = await getCategories();
        res.render('categories', {categories})
    } catch (error) {
        console.error('Error rendering categories:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function showFromCategories(req, res) {
    try {
        const categoryId = req.query.category_id;
        const items = await getFromCategory(categoryId);
        res.render('inventoryAll', { items });
    } catch (error) {
        console.error('Error rendering items:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function addToInventory(req, res) {
    try {
        const { name, description, categoryId, price } = req.body;
        await insertPart(name, description, categoryId, price);
        res.redirect('/inventory');
    } catch (error) {
        console.error('Error adding items to inventory:', error)
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getInventory,
    getAll,
    showCategories,
    showFromCategories,
    addToInventory
};